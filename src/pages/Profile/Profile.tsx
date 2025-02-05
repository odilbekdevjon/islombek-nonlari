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
import { Button } from "../../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../components/ui/alert-dialog";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTrigger,
} from "../../components/ui/drawer";

import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

// images
import { FiEdit3 } from "react-icons/fi";
import { FaCamera } from "react-icons/fa";
import avatar from "../../assets/avatar.svg";
import { FaRegEdit } from "react-icons/fa";
import { IoMdLock } from "react-icons/io";
import { TbShare2 } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
export const Profile = () => {
  const navigate = useNavigate()
  return (
    <>
      <header className="gap-5 border-b-2 border-b-[#FFCC15] pb-8 px-5 rounded-[30px] mt-5">
        <div className="flex items-center gap-4">
          <Avatar className="w-[116px] h-[116px]">
            <AvatarImage width={116} height={116} src={avatar} />
          </Avatar>
          <h1 className=" text-white text-center font-inter text-[20px] font-bold tracking-[1px]">
            Brooklyn Simmons
          </h1>
          <Dialog>
            <DialogTrigger asChild>
              <FiEdit3 className="mr-5" size={25} color="white" />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="text-[#1C2C57] font-bold text-[20px]">
                  Username o'zgartirish
                </DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="flex flex-col items-start gap-2">
                  <Label
                    htmlFor="username"
                    className="text-right text-[#1C2C57] font-bold text-[15px]"
                  >
                    Username
                  </Label>
                  <Input
                    id="username"
                    className="col-span-3 border-yellow-400"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" className="bg-[#1C2C57]">
                  Save changes
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
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
                  <TableCell className="font-bold text-[15px] text-[#1C2C57]">
                    7 xamir
                  </TableCell>
                  <TableCell className="font-bold text-[15px] text-[#1C2C57]">
                    60 ming
                  </TableCell>
                  <TableCell className="font-bold text-[15px] text-[#1C2C57]">
                    420 ming
                  </TableCell>
                </TableRow>
                <TableRow className="hover:bg-transparent border-b border-b-yellow-400">
                  <TableCell className="font-bold text-[15px] text-[#1C2C57]">
                    3 xamir
                  </TableCell>
                  <TableCell className="font-bold text-[15px] text-[#1C2C57]">
                    60 ming
                  </TableCell>
                  <TableCell className="font-bold text-[15px] text-[#1C2C57]">
                    180 ming
                  </TableCell>
                </TableRow>
                <TableRow className="hover:bg-transparent border-b border-b-yellow-400">
                  <TableCell className="font-bold text-[15px] text-[#1C2C57]">
                    6 xamir
                  </TableCell>
                  <TableCell className="font-bold text-[15px] text-[#1C2C57]">
                    60 ming
                  </TableCell>
                  <TableCell className="font-bold text-[15px] text-[#1C2C57]">
                    360 ming
                  </TableCell>
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
        <Drawer >
          <DrawerTrigger className="w-full text-white text-center font-inter text-[25px] font-bold tracking-[1px] mt-2 flex items-center gap-2">
            <button className="w-full  bg-white p-3 rounded-lg flex items-center gap-5 border-2 border-solid border-yellow-400 mb-4">
              <FaRegEdit size={20} color="#1C2C57" />
              <span className="text-[#1C2C57] font-bold text-[15px]">
                Usernameni o'zgartirish
              </span>
            </button>
          </DrawerTrigger>
          <DrawerContent className="bg-[#1C2C57] rounded-[20px] border-none h-60">
            <DrawerHeader className="">
              <DrawerDescription className="">
                <span className="text-white text-start block font-bold text-[15px] mb-2">
                  Usernameni o'zgartirish
                </span>
                <Input id="username" className="col-span-3 border-yellow-400 text-black" />
                <Button className="w-full text-[#1C2C57] bg-[#FFCC15] mt-10 font-bold text-[15px] hover:bg-[#FFCC15]">O'zgartirish</Button>
              </DrawerDescription>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>

            

            <Drawer >
          <DrawerTrigger className="w-full text-white text-center font-inter text-[25px] font-bold tracking-[1px] flex items-center gap-2">
          <button className="w-full bg-white p-3 rounded-lg flex items-center gap-5 border-2 border-solid border-yellow-400 mb-4">
              <IoMdLock size={20} color="#1C2C57" />
              <span className="text-[#1C2C57] font-bold text-[15px]">
                Profile parolini o'zgartirish
              </span>
            </button>
          </DrawerTrigger>
          <DrawerContent className="bg-[#1C2C57] rounded-[20px] border-none ">
              <DrawerDescription className="">
              <div className="grid gap-4 py-4">
              <div className="flex flex-col items-start gap-2 px-4">
                <Label
                  htmlFor="username"
                  className="text-right text-white font-bold text-[15px]"
                >
                  Parol
                </Label>
                <Input id="username" className="col-span-3 border-yellow-400" />
              </div>
              <div className="flex flex-col items-start gap-2 px-4">
                <Label
                  htmlFor="username"
                  className="text-right text-white font-bold text-[15px]"
                >
                  Eski parol
                </Label>
                <Input id="username" className="col-span-3 border-yellow-400" />
              </div>
              <div className="flex flex-col items-start gap-2 px-4">
                <Label
                  htmlFor="username"
                  className="text-right text-white font-bold text-[15px]"
                >
                  Yangi parol
                </Label>
                <Input id="username" className="col-span-3 border-yellow-400" />
              </div>
              <div className="px-4 mt-5">
              <Button type="submit" className="w-full hover:bg-[#FFCC15] bg-[#FFCC15] text-[#1C2C57] ">
                  Save changes
              </Button>
              </div>
            </div>
              </DrawerDescription>
          </DrawerContent>
        </Drawer>

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <button className="w-full bg-white p-3 rounded-lg flex items-center gap-5 border-2 border-solid border-yellow-400">
              <TbShare2 size={20} color="#1C2C57" />
              <span className="text-[#1C2C57] font-bold text-[15px]">
                Akkountdan Chiqish
              </span>
            </button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Akkountdan chiqasizmi?</AlertDialogTitle>
              <AlertDialogDescription></AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter className="flex ">
              <AlertDialogCancel className="bg-[#FFCC15] hover:bg-[#FFCC15] text-[#1C2C57]">Bekor qilish</AlertDialogCancel>
              <button onClick={() => navigate('/login')} className="border-2 p-2 rounded-lg bg-red-700 text-[#1C2C57]">
                Chiqish
              </button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </>
  );
};