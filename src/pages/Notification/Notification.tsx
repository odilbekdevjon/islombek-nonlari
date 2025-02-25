import { BsArrowLeftCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { FaCalendarAlt } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import { useGetAllNotificationsQuery } from "../../app/api";
import dayjs from "dayjs";
import { useState } from "react";

export const Notification = () => {
  const navigate = useNavigate();
  const { data }  = useGetAllNotificationsQuery([]);
  const [selectedNotification, setSelectedNotification] = useState<string | null | {
  id: string;
  from?: { fullName?: string };
  createdAt?: string;
  status?: string;
}>(null);
  

   if (!data) {
    return (
      <div className="text-center text-white font-bold text-lg mt-5">
        Ma'lumotlar yuklanmoqda...
      </div>
    );
  }

  return (
    <div>
      <header className="flex gap-16 items-center border-b-2 border-b-[#FFCC15] pb-5 px-5 rounded-[30px] mt-3">
        <BsArrowLeftCircleFill
          onClick={() => navigate("/home")}
          size={25}
          color="#FFCC15"
        />
        <h1 className="text-white text-center font-inter text-[25px] font-bold tracking-[1px]">
          Bildirishnoma
        </h1>
      </header>
      <div className="mt-10 px-4">
        
        {data?.length > 0 ? (
          data.map((notification: any) => (
        <Card key={notification.id} className="border-2 border-solid border-[#FFCC15] bg-transparent text-white mt-4">
          <CardHeader>
            <CardTitle className="mb-2 font-bold text-[20px] tracking-[1px]">
              {notification.from.fullName}
            </CardTitle>
            <CardDescription className="text-white flex justify-between">
              <div className="flex">
                <FaCalendarAlt className="mr-2" size={20} />
                <time>{dayjs(notification.createdAt).format("DD.MM.YYYY")}</time>
              </div>
              <div className="flex">
                <CiClock2 className="mr-2" size={20} />
                <time>{dayjs(notification.createdAt).format("HH:mm:ss")}</time>
              </div>
              <div className="font-bold text-[15px]">5 qob un</div>
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-between">
            <Button
              className="bg-[#DB141C] text-white font-[500px] hover:bg-[#B31219]"
              onClick={() => setSelectedNotification("REJECTED")}
            >
              Bekor qilish
            </Button>
            <Button
              className="bg-[#099431] hover:bg-[#077D27] text-white font-[500px]"
              onClick={() => {
                if (notification.status === "PENDING") {
                  setSelectedNotification(notification);
                }
              }}
            >
              Qabul qilish
            </Button>
          </CardFooter>
        </Card>
      ))
    ) : (
      <div className="text-white text-center mt-5 text-lg">
        Bildirishnomalar mavjud emas.
      </div>
    )}


        {selectedNotification && selectedNotification !== "REJECTED" && typeof selectedNotification === "object" && (
          <Card className="mt-5 border-2 border-solid border-[#FFCC15] bg-transparent text-white">
            <CardHeader>
              <CardTitle className="font-bold text-[20px] tracking-[1px]">
                {selectedNotification?.from?.fullName || "Noma'lum foydalanuvchi"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-white flex justify-between">
                <div className="flex">
                  <FaCalendarAlt className="mr-2" size={20} />
                  <time>{selectedNotification?.createdAt ? dayjs(selectedNotification.createdAt).format("DD.MM.YYYY") : "Noma'lum sana"}</time>
                </div>
                <div className="flex">
                  <CiClock2 className="mr-2" size={20} />
                  <time>{selectedNotification?.createdAt ? dayjs(selectedNotification.createdAt).format("HH:mm:ss") : "Noma'lum vaqt"}</time>
                </div>
                <div className="font-bold text-[15px]">5 qob un</div>
              </CardDescription>
            </CardContent>
          </Card>
)}

      </div>
    </div>
  );
};
