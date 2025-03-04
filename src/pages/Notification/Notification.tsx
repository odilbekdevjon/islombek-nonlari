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
import { useEffect, useState } from "react";

interface Notification {
  _id: string;
  from: {
    fullName: string;
  };
  createdAt: string;
  status: string;
}

export const Notification = () => {
  const navigate = useNavigate();
  const { data } = useGetAllNotificationsQuery([]);
  
  // LocalStorage'dan qabul qilingan bildirishnomalarni olish
  const getStoredNotifications =  (): Notification[] => {
    const stored = localStorage.getItem("acceptedNotifications");
    return stored ? JSON.parse(stored) : [];
  };

  // LocalStorage'dan o'chirilgan bildirishnomalarni olish
  const getDeletedNotifications = (): string[] =>{
    const stored = localStorage.getItem("deletedNotifications");
    return stored ? JSON.parse(stored) : [];
  };

  const [acceptedNotifications, setAcceptedNotifications] = useState<Notification[]>(getStoredNotifications);
  const [deletedNotifications, setDeletedNotifications] = useState<string[]>(getDeletedNotifications);
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    if (data && Array.isArray(data)) {
      const uniqueNotifications = data.filter(
        (notification) =>
          !acceptedNotifications.some((acc:any) => acc._id === notification._id) &&
          !deletedNotifications.includes(notification._id)
      );
      setNotifications(uniqueNotifications);
    }
  }, [data, acceptedNotifications, deletedNotifications]);

  // Qabul qilish
  const handleAccept = (notification:any) => {
    if (notification?.status?.toUpperCase() === "PENDING") {
      setAcceptedNotifications((prev:any) => {
        const updated = [...prev, notification];
        localStorage.setItem("acceptedNotifications", JSON.stringify(updated));
        return updated;
      });
      setNotifications((prev) => prev.filter((item) => item._id !== notification._id));
    }
  };

  // Bekor qilish (o‘chirilganlarni LocalStorage’da saqlash)
  const handleReject = (id:any) => {
    setDeletedNotifications((prev:any) => {
      const updated = [...prev, id];
      localStorage.setItem("deletedNotifications", JSON.stringify(updated));
      return updated;
    });
    setNotifications((prev) => prev.filter((item) => item._id !== id));
  };

  return (
    <div>
      <header className="flex gap-16 items-center border-b-2 border-b-[#FFCC15] pb-5 px-5 rounded-[30px] mt-3">
        <BsArrowLeftCircleFill onClick={() => navigate("/home")} size={25} color="#FFCC15" />
        <h1 className="text-white text-center font-inter text-[25px] font-bold tracking-[1px]">
          Bildirishnoma
        </h1>
      </header>

      <div className="mt-10 px-4">
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <Card
              key={notification?._id}
              className="border-2 border-solid border-[#FFCC15] bg-transparent text-white mt-4"
            >
              <CardHeader>
                <CardTitle className="mb-2 font-bold text-[20px] tracking-[1px]">
                  {notification?.from?.fullName || "Noma'lum foydalanuvchi"}
                </CardTitle>
                <CardDescription className="text-white flex justify-between">
                  <div className="flex">
                    <FaCalendarAlt className="mr-2" size={20} />
                    <time>{dayjs(notification?.createdAt).format("DD.MM.YYYY")}</time>
                  </div>
                  <div className="flex">
                    <CiClock2 className="mr-2" size={20} />
                    <time>{dayjs(notification?.createdAt).format("HH:mm:ss")}</time>
                  </div>
                  <div className="font-bold text-[15px]">5 qob un</div>
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex justify-between">
                <Button
                  className="bg-[#DB141C] text-white font-[500px] hover:bg-[#B31219]"
                  onClick={() => handleReject(notification._id)}
                >
                  Bekor qilish
                </Button>
                <Button
                  className="bg-[#099431] hover:bg-[#077D27] text-white font-[500px]"
                  onClick={() => handleAccept(notification)}
                  disabled={notification?.status?.toUpperCase() !== "PENDING"}
                >
                  Qabul qilish
                </Button>
              </CardFooter>
            </Card>
          ))
        ) : (
          <div className="text-white text-center mt-5 text-lg"></div>
        )}

        {acceptedNotifications.length > 0 && (
          <div className="mt-10">
            <h2 className="text-[#FFCC15] text-xl font-bold mb-4">Qabul qilingan bildirishnomalar</h2>
            {acceptedNotifications.map((notification:any) => (
              <Card
                key={notification._id}
                className="border-2 border-solid border-[#FFCC15] bg-transparent text-white mt-4"
              >
                <CardHeader>
                  <CardTitle className="font-bold text-[20px] tracking-[1px]">
                    {notification?.from?.fullName || "Noma'lum foydalanuvchi"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white flex justify-between">
                    <div className="flex">
                      <FaCalendarAlt className="mr-2" size={20} />
                      <time>{dayjs(notification?.createdAt).format("DD.MM.YYYY")}</time>
                    </div>
                    <div className="flex">
                      <CiClock2 className="mr-2" size={20} />
                      <time>{dayjs(notification?.createdAt).format("HH:mm:ss")}</time>
                    </div>
                    <div className="font-bold text-[15px]">5 qob un</div>
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
