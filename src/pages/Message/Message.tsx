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
import { useState } from "react";
import { useGetSingleUserQuery } from "../../app/api/userApi";


export const Message = () => {
  const { id } = useParams();
  const {data } = useGetSingleUserQuery({id: id as string});
  
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "Shuhrat",
      text: "Salom! Bugungi darsni muhokama qilamizmi?",
      time: "19:45",
    },
  ]);

  // Xabar yuborish funksiyasi
  const sendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        sender: "You",
        text: message,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages([...messages, newMessage]); 
      setMessage(""); 
    }
  };

  // Enter tugmasi bilan xabar yuborish
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

      <div className="flex-grow p-5 overflow-y-auto space-y-5">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.sender === "You" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`${
                msg.sender === "You" ? "bg-[#6C63FF]" : "bg-white"
              } p-4 rounded-lg shadow-lg relative max-w-xs`}
            >
              {msg.sender !== "You" && (
                <AlertTitle className="text-lg font-bold mb-2">
                  {data?.fullName}
                </AlertTitle>
              )}
              <p
                className={`text-sm ${
                  msg.sender === "You" ? "text-white" : "text-[#1C2C57]"
                }`}
              >
                {msg.text}
              </p>
              <span
                className={`block text-xs ${
                  msg.sender === "You"
                    ? "text-gray-300"
                    : "text-[#1C2C57]"
                } absolute bottom-1 right-2 `}
              >
                {dayjs(data?.createdAt).format("YYYY-MM-DD")}
              </span>
              {msg.sender !== "You" ? (
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
          onKeyDown={handleKeyDown} // Enter tugmasi orqali yuborish
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
