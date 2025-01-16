import { IoMdNotifications } from "react-icons/io";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { CiShoppingBasket } from "react-icons/ci";
import { IoScaleOutline } from "react-icons/io5";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { Alert, AlertDescription } from "../../components/ui/alert";
import { useNavigate } from "react-router-dom";

export const Storage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <header className="flex justify-between items-center border-b-2 border-b-[#FFCC15] pb-5 px-5 rounded-[30px] mt-3">
        <BsArrowLeftCircleFill onClick={() => navigate('/home')} size={25} color="#FFCC15" />
        <h1 className="text-white text-center font-inter text-[25px] font-bold tracking-[1px]">
          Omborxona
        </h1>
        <IoMdNotifications onClick={() => navigate("/notification")} size={25} color="#FFCC15" />
      </header>
      <div className="px-5">
        <Accordion
          type="single"
          collapsible
          className="w-full bg-[#fff] rounded-md mt-28 mr-5 px-5 hover:no-underline">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-[16px] text-[#1C2C57] text-inter font-bold hover:no-underline">Un</AccordionTrigger>
            <AccordionContent className="flex gap-3">
              <Alert>
                <AlertDescription className="flex items-center gap-2 text-[10px] font-bold text-[#1C2C57] font-inter">
                <CiShoppingBasket size={20} /> <span>8 Qop</span>
                </AlertDescription>
              </Alert>
              <Alert className="bg-[#FFCC15]">
                <AlertDescription className="flex items-center gap-2 text-[10px] font-bold text-[#1C2C57]">
                <IoScaleOutline size={20} />  5 Qop olib kelindi
                </AlertDescription>
              </Alert>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="hover:no-underline text-[16px] text-[#1C2C57] text-inter font-bold">Tuxum miqdori</AccordionTrigger>
            <AccordionContent className="p-2 rounded-lg inline-block bg-[#1C2C57] text-[18px] font-bold text-[#FFCC15]">8</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="hover:no-underline text-[16px] text-[#1C2C57] text-inter font-bold">Suv miqdori</AccordionTrigger>
            <AccordionContent className="p-2 rounded-lg inline-block bg-[#1C2C57] text-[18px] font-bold text-[#FFCC15]">20</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="hover:no-underline text-[16px] text-[#1C2C57] text-inter font-bold">Saryog' miqdori</AccordionTrigger>
            <AccordionContent className="p-2 rounded-lg inline-block bg-[#1C2C57] text-[18px] font-bold text-[#FFCC15]">14</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};
