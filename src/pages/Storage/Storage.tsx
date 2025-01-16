import { IoMdNotifications } from "react-icons/io";
import { BsArrowLeftCircleFill } from "react-icons/bs";
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
        <IoMdNotifications size={25} color="#FFCC15" />
      </header>
      <div className="px-5">
        <Accordion
          type="single"
          collapsible
          className="w-full bg-[#fff] rounded-md mt-28 mr-5 px-5 hover:no-underline">
          <AccordionItem value="item-1">
            <AccordionTrigger className="hover:no-underline">Un </AccordionTrigger>
            <AccordionContent className="flex gap-3">
              <Alert>
                <AlertDescription>
                  8 Qop
                </AlertDescription>
              </Alert>
              <Alert className="bg-[#FFCC15]">
                <AlertDescription className="text-[10px] font-bold text-[#1C2C57]">
                  5 Qop olib kelindi
                </AlertDescription>
              </Alert>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="hover:no-underline">Tuxum miqdori</AccordionTrigger>
            <AccordionContent>8</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="hover:no-underline">Suv miqdori</AccordionTrigger>
            <AccordionContent>20</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="hover:no-underline">Saryog' miqdori</AccordionTrigger>
            <AccordionContent>14</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};
