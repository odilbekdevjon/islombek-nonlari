import { Avatar, AvatarImage } from "../../components/ui/avatar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "../../components/ui/table";

// images
import { FiEdit3 } from "react-icons/fi";
import { FaCamera } from "react-icons/fa";
import avatar from "../../assets/avatar.svg";
import { FaRegEdit } from "react-icons/fa";
import { IoMdLock } from "react-icons/io";
import { TbShare2 } from "react-icons/tb";
export const Profile = () => {
  return (
    <>
      <header className="gap-5 border-b-2 border-b-[#FFCC15] pb-8 px-5 rounded-[30px] mt-5">
        <div className="flex items-center gap-5">
          <Avatar className="w-[116px] h-[116px]">
            <AvatarImage width={116} height={116} src={avatar} />
          </Avatar>
          <h1 className="flex items-center gap-2 text-white text-center font-inter text-[20px] font-bold tracking-[1px]">
            Brooklyn Simmons <FiEdit3 />
          </h1>
        </div>
        <div className="w-14 h-14 p-[12px] rounded-[25px] absolute top-20 left-24 bg-[#677294CC]">
          <FaCamera className="" size={30} color="white" />
        </div>
      </header>

      <Accordion type="single" collapsible className=" px-4  mt-14">
        <AccordionItem value="item-1">
          <AccordionTrigger className="hover:no-underline bg-white p-2 rounded-lg border-2 border-yellow-400">
            Maoshlarim
          </AccordionTrigger>
          <AccordionContent className="">
            <div className="flex gap-3 my-2">
            <span className="text-[#FFCC15] text-[14px] font-bold px-4">
              Xamir soni
            </span>
            <span className="text-[#FFCC15] text-[14px] font-bold px-4">
              Doimiy narx
            </span>
            <span className="text-[#FFCC15] text-[14px] font-bold px-4">
              Umumiy
            </span>
            </div>

            <Table className="bg-white">
              <TableBody className="border border-yellow-400 rounded-lg">
                <TableRow className="hover:bg-transparent border-b border-b-yellow-400 ">
                  <TableCell className="font-bold text-[15px] text-[#1C2C57]">7 xamir</TableCell>
                  <TableCell className="font-bold text-[15px] text-[#1C2C57]">60 ming</TableCell>
                  <TableCell className="font-bold text-[15px] text-[#1C2C57]">420 ming</TableCell>
                </TableRow>
                <TableRow className="hover:bg-transparent border-b border-b-yellow-400">
                  <TableCell className="font-bold text-[15px] text-[#1C2C57]">3 xamir</TableCell>
                  <TableCell className="font-bold text-[15px] text-[#1C2C57]">60 ming</TableCell>
                  <TableCell className="font-bold text-[15px] text-[#1C2C57]">180 ming</TableCell>
                </TableRow>
                <TableRow className="hover:bg-transparent border-b border-b-yellow-400">
                  <TableCell className="font-bold text-[15px] text-[#1C2C57]">6 xamir</TableCell>
                  <TableCell className="font-bold text-[15px] text-[#1C2C57]">60 ming</TableCell>
                  <TableCell className="font-bold text-[15px] text-[#1C2C57]">360 ming</TableCell>
                </TableRow>
                <TableRow className="hover:bg-transparent border-b border-b-yellow-400">
                  <TableCell className=""></TableCell>
                  <TableCell className=""></TableCell>
                  <TableCell className=""></TableCell>
                </TableRow>
                <TableRow className="hover:bg-transparent border-b border-b-yellow-400">
                  <TableCell className=""></TableCell>
                  <TableCell className=""></TableCell>
                  <TableCell className=""></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="px-4 mt-5">
        <button className="w-full bg-white p-3 rounded-lg flex items-center gap-5 border-2 border-solid border-yellow-400 mb-4">
            <FaRegEdit size={20} color="#1C2C57" />
            <span className="text-[#1C2C57] font-bold text-[15px]">Usernameni o'zgartirish</span>
        </button>
        <button className="w-full bg-white p-3 rounded-lg flex items-center gap-5 border-2 border-solid border-yellow-400 mb-4">
            <IoMdLock size={20} color="#1C2C57" />
            <span className="text-[#1C2C57] font-bold text-[15px]">Profile parolini o'zgartirish</span>
        </button>
        <button className="w-full bg-white p-3 rounded-lg flex items-center gap-5 border-2 border-solid border-yellow-400">
            <TbShare2 size={20} color="#1C2C57" />
            <span className="text-[#1C2C57] font-bold text-[15px]">Akkountdan Chiqish</span>
        </button>
      </div>
    </>
  );
};
