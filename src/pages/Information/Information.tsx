import { useState } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../../components/ui/accordion";
import { Drawer, DrawerContent, DrawerTrigger,} from "../../components/ui/drawer";
import {Select,SelectContent,SelectGroup,SelectItem,SelectTrigger,SelectValue,} from "../../components/ui/select";
import { Button } from "../../components/ui/button";
// images
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Textarea } from "../../components/ui/textarea"
import { FaPlus } from "react-icons/fa6";

export const Information = () => {
  const navigate = useNavigate();
    const [open, setOpen] = useState(false);
  
  return (
    <>
      <header className="flex justify-between items-center border-b-2 border-b-[#FFCC15] pb-5 px-5 rounded-[30px] mt-3">
        <BsArrowLeftCircleFill
          onClick={() => navigate("/home")}
          size={25}
          color="#FFCC15"
        />
        <h1 className="text-white text-center font-inter text-[25px] font-bold tracking-[1px]">
          Shikoyatlar
        </h1>
        <IoMdNotifications
          onClick={() => navigate("/notification")}
          size={25}
          color="#FFCC15"
        />
      </header>
     <div className="px-4 mt-5">
     <Accordion type="single" collapsible className="w-full ">
        <AccordionItem value="item-1" className="bg-transparent ">
          <AccordionTrigger className=" hover:no-underline text-white text-[24px]">Kelib tushgan shikoyatlar</AccordionTrigger>
          <AccordionContent className="bg-white text-[] p-2 border-2 border-[#FFCC15] rounded-lg">
            <h2 className="text-[#1C2C57] font-bold text-[18px] mb-2">Dispatcherdan</h2>
            <p className="text-[#1C2C57] font-bold text-[14px] ">Haydovchi zakazlarni vaqtida yetkazmayapti</p>
            <span className="block  text-end text-[#C71A1A] text-[15px] font-bold mt-2">Izzat haydovchi</span>
          </AccordionContent>
          <AccordionContent className="bg-white text-[] p-2 border-2 border-[#FFCC15] rounded-lg mt-5">
            <h2 className="text-[#1C2C57] font-bold text-[18px] mb-2">Haydovchidan</h2>
            <p className="text-[#1C2C57] font-bold text-[14px] ">Shikoyatning sababi</p>
            <span className="block  text-end text-[#C71A1A] text-[15px] font-bold mt-2">Dispatcher</span>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible className="w-full mt-5">
        <AccordionItem value="item-1" className="bg-transparent ">
          <AccordionTrigger className=" hover:no-underline text-white text-[24px]">Yuborilganlar</AccordionTrigger>
          <AccordionContent className="bg-white text-[] p-2 border-2 border-[#FFCC15] rounded-lg">
            <h2 className="text-[#C71A1A] font-bold text-[18px] mb-2">Dispatcherga</h2>
            <p className="text-[#1C2C57] font-bold text-[14px] ">Haydovchi zakazlarni vaqtida yetkazmayapti</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
     </div>

     <Drawer >
        <DrawerTrigger >
          <div className="flex items-end absolute right-0  min-h-[25vh] p-4">
            <Button variant="outline" className="bg-[#FFCC15] rounded-[50%] w-[50px] h-[50px] hover:bg-[#FFCC15]"> <FaPlus size={30} color="#1C2C57" />  </Button>
          </div>
        </DrawerTrigger>
        <DrawerContent className="bg-[#1C2C57] flex flex-col justify-between min-h-[45vh]">
          <div className="px-4 flex-grow overflow-y-auto">
          <Select open={open} onOpenChange={setOpen} >
          <SelectTrigger className="w-full mt-8 mb-4 none">
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
          <Textarea className="h-[20vh] " placeholder="Type your message here." />
          <button className="absolute  bottom-0 right-0 mb-5 mr-5 px-10 py-1 rounded-lg bg-[#FFCC15]">Yuborish</button>
        </Select>
          </div>
        </DrawerContent>
      </Drawer>

    </>
  );
};
