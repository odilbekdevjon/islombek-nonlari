import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Alert, AlertDescription } from "../../components/ui/alert";
import { Button } from "../../components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger,} from "../../components/ui/drawer";
import {Select,SelectContent,SelectGroup,SelectItem,SelectTrigger,SelectValue,} from "../../components/ui/select";
// image
import person from "../../assets/person.svg";
import { IoPersonAddSharp } from "react-icons/io5";

export const Messages = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="border-b-2 border-b-[#FFCC15] pb-5 px-5 rounded-[30px] mt-4">
        <h1 className="text-white text-center font-inter text-[25px] font-bold tracking-[1px]">
          Message
        </h1>
      </header>
      <div className="px-4 mt-10">
        <Alert onClick={() => navigate('/message')} className="flex gap-2 mb-5 p-2">
          <img src={person} width={50} alt="person" />
          <AlertDescription  >
            <span className="font-bold text-[14px] text-[#1C2C57]">
              Shuhrat
            </span>
            <p className=" text-[12px] text-[#1C2C57]">Message</p>
          </AlertDescription>
        </Alert>
        <Alert onClick={() => navigate('/message')} className="flex gap-2 mb-5 p-2">
          <img src={person} width={50} alt="person" />
          <AlertDescription >
            <span className="font-bold text-[14px] text-[#1C2C57]">
              Shuhrat
            </span>
            <p className=" text-[12px] text-[#1C2C57]">Message</p>
          </AlertDescription>
        </Alert>
        <Alert onClick={() => navigate('/message')} className="flex gap-2 p-2">
          <img src={person} width={50} alt="person" />
          <AlertDescription >
            <span className="font-bold text-[14px] text-[#1C2C57]">
              Shuhrat
            </span>
            <p className=" text-[12px] text-[#1C2C57]">Message</p>
          </AlertDescription>
        </Alert>
      </div>

      <Drawer >
        <DrawerTrigger >
          <div className="flex items-end absolute right-0  min-h-[30vh] p-4">
            <Button variant="outline" className="bg-[#FFCC15] rounded-[50%] w-[50px] h-[50px] hover:bg-[#FFCC15]"> <IoPersonAddSharp size={35} color="#1C2C57" /> </Button>
          </div>
        </DrawerTrigger>
        <DrawerContent className="bg-[#1C2C57] flex flex-col justify-between">
          <div className="px-4 flex-grow overflow-y-auto">
          <Select open={open} onOpenChange={setOpen} >
          <SelectTrigger className="w-full mt-8 mb-36 none">
            <SelectValue placeholder="Select a name" />
          </SelectTrigger>
          <SelectContent className=" absolute top-full mt-2 z-50 max-h-60 overflow-y-auto bg-white shadow-lg rounded-md">
            <SelectGroup >
              <SelectItem className="text-[16px] font-bold font-inter text-[#1C2C57] " value="shuhrat"> 
                <div className="flex items-center gap-5">Shuhrat</div>
              </SelectItem>
              <SelectItem className="text-[16px] font-bold font-inter text-[#1C2C57]" value="izzat"> 
                <div className="flex items-center gap-5 "> Izzat</div>
              </SelectItem>
              <SelectItem className="text-[16px] font-bold font-inter text-[#1C2C57]" value="asadbek"> 
                <div className="flex items-center gap-5">Asadbek</div> 
              </SelectItem>
              <SelectItem className="text-[16px] font-bold font-inter text-[#1C2C57]" value="behruz"> 
                <div className="flex items-center gap-5">Behruz</div> 
              </SelectItem>
            </SelectGroup>
          </SelectContent>
          
          <button className="absolute  bottom-0 right-0 mb-5 mr-5 px-10 py-1 rounded-lg bg-[#FFCC15]">Kiritish</button>
        </Select>
          </div>
        </DrawerContent>
      </Drawer>

    </>
  );
};
