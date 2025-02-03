import { Link, useNavigate } from "react-router-dom";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../../components/ui/drawer";
import { Alert, AlertDescription, AlertTitle } from "../../components/ui/alert";

// icons
import { BiSolidMessageError } from "react-icons/bi";
import { IoMdNotifications } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import branch from "../../assets/branch.svg";
export const Main = () => {
  const navigate = useNavigate();
  return (
    <div>
      <header className="flex justify-center items-center border-b-2 border-b-[#FFCC15] pb-5 rounded-[30px] mt-3">
        {/* <h1 className="text-white text-center font-inter text-[25px] font-bold tracking-[1px]">Jo'raboyeva</h1> */}
        <Drawer >
          <DrawerTrigger className="text-white text-center font-inter text-[25px] font-bold tracking-[1px] mt-2 flex items-center gap-2">
            Jo'raboyeva <FaAngleDown />
          </DrawerTrigger>
          <DrawerContent className="bg-[#1C2C57] rounded-[20px] border-none">
            <DrawerHeader className="">
              <DrawerDescription className="flex items-center gap-6 bg-white text-[#1C2C57] text-sm rounded-lg p-3 mb-2">
                <Avatar>
                  <AvatarImage src={branch} />
                  <AvatarFallback className="text-white">CN</AvatarFallback>
                </Avatar>
                <DrawerTitle className="text-[18px] text-[#1C2C57] font-bold">
                  Juraboyeva
                </DrawerTitle>
              </DrawerDescription>
              <DrawerDescription className="flex items-center gap-6 bg-white text-[#1C2C57] text-sm rounded-lg p-3 mb-2">
                <Avatar>
                  <AvatarImage src={branch} />
                  <AvatarFallback className="text-white">CN</AvatarFallback>
                </Avatar>
                <DrawerTitle className="text-[18px] text-[#1C2C57] font-bold">
                  Uchrashuv
                </DrawerTitle>
              </DrawerDescription>
              <DrawerDescription className="flex items-center gap-6 bg-white text-[#1C2C57] text-sm rounded-lg p-3">
                <Avatar>
                  <AvatarImage src={branch} />
                  <AvatarFallback className="text-white">CN</AvatarFallback>
                </Avatar>
                <DrawerTitle className="text-[18px] text-[#1C2C57] font-bold">
                  Juraboyeva
                </DrawerTitle>
              </DrawerDescription>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>

        <IoMdNotifications
          onClick={() => navigate("/notification")}
          className="relative left-12"
          size={25}
          color="#FFCC15"
        />
      </header>
      <div className="w-full  mt-5">
        <div className="mt-10 ml-5">
          <BiSolidMessageError
            onClick={() => navigate("/messages")}
            size={25}
            color="#FFCC15"
          />
        </div>
        <div className="flex gap-5 mt-10 justify-center px-5">
          <Link
            className="w-[163px] h-[131px] bg-white rounded-[16px] border-4 border-solid border-[#FFCC15] text-[#1C2C57] text-center font-bold text-[20px] py-11"
            to={"/storage"}
          >
            Omborxona
          </Link>
          <Link
            className="w-[163px] h-[131px] bg-white rounded-[16px] border-4 border-solid border-[#FFCC15] text-[#1C2C57] text-center font-bold text-[20px] py-11"
            to={"/bakery"}
          >
            Xamir
          </Link>
        </div>
      </div>

      <div className="mt-10 px-4">
        <h4 className="text-[#FFCC15] font-bold text-[20px] tracking-[5px] mb-3">Retsept</h4>
        <Alert className="flex justify-between items-center py-2 mb-2">
          <AlertTitle className="font-bold text-[16px]">Un</AlertTitle>
          <AlertDescription className="font-bold text-[16px]">1 qop</AlertDescription>
        </Alert>
        <Alert className="flex justify-between items-center py-2 mb-2">
          <AlertTitle className="font-bold text-[16px] ">Un</AlertTitle>
          <AlertDescription className="font-bold text-[16px]">1 qop</AlertDescription>
        </Alert>
        <Alert className="flex justify-between items-center py-2 mb-2">
          <AlertTitle className="font-bold text-[16px]">Un</AlertTitle>
          <AlertDescription className="font-bold text-[16px]">1 qop</AlertDescription>
        </Alert>
        <Alert className="flex justify-between items-center py-2">
          <AlertTitle className="font-bold text-[16px]">Un</AlertTitle>
          <AlertDescription className="font-bold text-[16px]">1 qop</AlertDescription>
        </Alert>
      </div>
    </div>
  );
};
