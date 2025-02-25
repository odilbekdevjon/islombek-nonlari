import { useState } from "react";
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
import { BiSolidMessageError } from "react-icons/bi";
import { IoMdNotifications } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import brachImage from "../../assets/branch.svg";
import { useGetAllBranchesQuery } from "../../app/api";
import { useGetAllRetsepsQuery } from "../../app/api/retsepApi";

export const Main = () => {
  const navigate = useNavigate();
  const { data: branches } = useGetAllBranchesQuery([]);
  const { data: retsepts } = useGetAllRetsepsQuery([]);

  const [selectedBranchId, setSelectedBranchId] = useState<string | null>(null);

  return (
    <div className="overflow-y-auto">
      <header className="flex justify-center items-center border-b-2 border-b-[#FFCC15] pb-3 rounded-[30px] mt-3">
        {branches?.map((branch: any) => (
          <Drawer key={branch._id}>
            <DrawerTrigger
              className="text-white text-center font-inter text-[25px] font-bold tracking-[1px] mt-2 flex items-center gap-2"
              onClick={() => setSelectedBranchId(branch._id)}
            >
              {branch.title} <FaAngleDown />
            </DrawerTrigger>
            <DrawerContent className="bg-[#1C2C57] rounded-[20px] border-none">
              <DrawerHeader>
                <DrawerDescription className="flex items-center gap-6 bg-white text-[#1C2C57] text-sm rounded-lg p-3 mb-2">
                  <Avatar>
                    <AvatarImage src={branch.image || brachImage} />
                    <AvatarFallback className="text-white">CN</AvatarFallback>
                  </Avatar>
                  <DrawerTitle className="text-[18px] text-[#1C2C57] font-bold">
                    {branch.title}
                  </DrawerTitle>
                </DrawerDescription>
              </DrawerHeader>
            </DrawerContent>
          </Drawer>
        ))}

        <IoMdNotifications
          onClick={() => navigate("/notification")}
          className="relative left-12"
          size={25}
          color="#FFCC15"
          cursor={"pointer"}
        />
      </header>

      {/* Asosiy menyu */}
      <div className="w-full mt-5">
        <div className="mt-5 ml-5">
          <BiSolidMessageError
            onClick={() => navigate("/information")}
            size={25}
            color="#FFCC15"
            cursor={"pointer"}
          />
        </div>
        <div className="flex gap-5 mt-10 justify-center px-5">
          <Link
            className="w-full bg-white rounded-[16px] border-4 border-solid border-[#FFCC15] text-[#1C2C57] text-center font-bold text-[20px] py-11"
            to={"/storage"}
          >
            Omborxona
          </Link>
          <Link
            className="w-full bg-white rounded-[16px] border-4 border-solid border-[#FFCC15] text-[#1C2C57] text-center font-bold text-[20px] py-11"
            to={"/bakery"}
          >
            Xamir
          </Link>
        </div>
      </div>

      {/* Retseptlar qismi */}
      <div className="mt-8 px-4">
        <h4 className="text-[#FFCC15] font-bold text-[20px] tracking-[5px] mb-3">
          Retsept
        </h4>
        {retsepts !== undefined && retsepts.length > 0 ? (
          retsepts
            ?.filter(
              (retsept: any) =>
                typeof retsept.amount === "number" &&
                retsept.amount > 0 &&
                (selectedBranchId === null || retsept.branchId === selectedBranchId) // Tanlangan branch yoki barcha retseptlar
            )
            .map((retsep: any) => (
              <Alert
                key={retsep._id}
                className="flex justify-between items-center py-2 mb-2"
              >
                <AlertTitle className="font-bold text-[16px]">
                  {retsep.title}
                </AlertTitle>
                <AlertDescription className="font-bold text-[16px]">
                  {retsep.amount} {retsep.scope}
                </AlertDescription>
              </Alert>
            ))
        ) : (
          <Alert className="flex justify-center items-center py-2">
            <AlertTitle className="font-bold text-[16px]">
              Ushbu boshqa branchda yo'q retseptlar
            </AlertTitle>
          </Alert>
        )}
      </div>
    </div>
  );
};
