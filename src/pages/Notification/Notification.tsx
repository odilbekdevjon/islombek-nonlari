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

export const Notification = () => {
  const navigate = useNavigate();
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
      <div className="mt-10 px-5">
        <Card className="border-2 border-solid border-[#FFCC15] bg-transparent text-white ">
          <CardHeader >
            <CardTitle className="mb-2">Haydovchi</CardTitle>
            <CardDescription className="text-white flex justify-between ">
                <div className="flex"><FaCalendarAlt className="mr-2" size={20}  /><time>04.12.2024</time></div>
                <div className="flex"><CiClock2 className="mr-2" size={20} /><time>9:30</time></div>
                <div className="font-bold text-[15px]">5 qob un</div>
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-between">
            <Button className="bg-[#DB141C] text-white  font-[500px] hover:bg-[#DB141C]">Bekor qilish</Button> <Button className="bg-[#099431] hover:bg-[#099431] text-white font-[500px]">Qabul qilish</Button>
          </CardFooter>
        </Card>
        <Card className="mt-5 border-2 border-solid border-[#FFCC15] bg-transparent text-white">
          <CardHeader>
            <CardTitle>Shuhrat Azizov</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-white flex justify-between ">
                <div className="flex"><FaCalendarAlt className="mr-2" size={20}  /><time>04.12.2024</time></div>
                <div className="flex"><CiClock2 className="mr-2" size={20} /><time>9:30</time></div>
                <div className="font-bold text-[15px]">5 qob un</div>
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
