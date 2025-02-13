import { useEffect, useState } from "react";
import { io } from "socket.io-client";
const socket = io("https://bakery.the-watcher.uz");
type Message = {
  id?: string;
  content: string;
  createdAt?: string;
  from: string;
  to: string;
};
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { AlertTitle } from "../../components/ui/alert";
import dayjs from "dayjs";
// images
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";
import { IoSend } from "react-icons/io5";
// api
import { useGetSingleUserQuery } from "../../app/api/userApi";
import { useGetMessageQuery, usePostMessageMutation } from "../../app/api";


export const Message = () => {
  const { id } = useParams();
  const { data } = useGetSingleUserQuery({id: id as string});
  const {data:info, refetch} = useGetMessageQuery(id);
  const [post] = usePostMessageMutation();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);


  useEffect(() => {
    socket.on("message", (newMessage) => {
      if (newMessage.to === id || newMessage.from === id) {
        setMessages([...messages, newMessage]);
      }
    });

    return () => {
      socket.off("message");
    };
  }, [id]);

  const sendMessage = async () => {
    if (!message.trim()) return;
  
    try {
      const response = await post({ to: id as string, content: message }).unwrap();
      socket.emit("message", response);
  
      // setMessages((prevMessages) => [...prevMessages, response]);
      setMessage("");
      refetch();
    } catch (error) {
      console.error("Xabar yuborishda xatolik:", error);
    }
  };

  const handleKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };
  return (
    <>
      <header className="flex items-center gap-10 border-b-2 border-b-[#FFCC15] pb-5 px-5 rounded-[30px] mt-4">
        <FaArrowLeftLong
          onClick={() => navigate("/messages")}
          color="white"
          size={20}
        />
        <Avatar>
          <AvatarImage src={data?.avatar} alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h1 className="text-white text-center font-inter text-[25px] font-bold tracking-[1px]">
          {data?.fullName}
        </h1>
      </header>

      <div className="flex-row-reverse p-5 overflow-y-auto space-y-5">
        {info?.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.from === id ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`${
                msg.from === id ? "bg-[#6C63FF]" : "bg-white"
              } p-4 rounded-lg shadow-lg relative max-w-xs`}
            >
              {msg.from !== id && (
                <AlertTitle className="text-lg font-bold mb-2">
                  {data?.fullName}
                </AlertTitle>
              )}
              <p
                className={`text-sm ${
                  msg.from === id ? "text-white" : "text-[#1C2C57]"
                }`}
              >
                {msg.content}
              </p>
              <span
                className={`block text-xs ${
                  msg.from  === id
                    ? "text-gray-300"
                    : "text-[#1C2C57]"
                } absolute bottom-1 right-2 `}
              >
                {dayjs(msg?.createdAt).format('HH:MM')}
              </span>
              {msg.from !== id ? (
                <div className="absolute left-[-9px] top-[50%] transform -translate-y-1/2 w-0 h-0 border-y-[10px] border-y-transparent border-r-[10px] border-r-white"></div>
              ) : (
                <div className="absolute right-[-9px] top-[50%] transform -translate-y-1/2 w-0 h-0 border-y-[10px] border-y-transparent border-l-[10px] border-l-[#6C63FF]"></div>
              )}
            </div>
          </div>
        ))}
      </div>


      <div className="flex items-center p-4 bg-[#1C2C57] border-t border-gray-500 mt-5">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown} 
          type="text"
          placeholder="Type a message..."
          className="flex-grow bg-gray-700 text-white p-2 rounded-lg focus:outline-none"
        />
        <button
          onClick={sendMessage}
          className="ml-2 bg-[#FFCC15] p-2 rounded-lg"
        >
          <IoSend size={20} color="#1C2C57" />
        </button>
      </div>
    </>
  );
};
