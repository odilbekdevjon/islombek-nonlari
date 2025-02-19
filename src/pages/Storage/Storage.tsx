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
import { useGetAllRetsepsQuery } from "../../app/api/retsepApi";

export const Storage = () => {
  const navigate = useNavigate();
  const { data: retsepts } = useGetAllRetsepsQuery([]);
  console.log(retsepts);

  return (
    <div>
      <header className="flex justify-between items-center border-b-2 border-b-[#FFCC15] pb-5 px-5 rounded-[30px] mt-4">
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
            <AccordionTrigger className="text-[16px] text-[#1C2C57] text-inter  hover:no-underline">Un</AccordionTrigger>
            <AccordionContent className="flex gap-3">
              <Alert className="bg-slate-200 h-8">
                <AlertDescription className="flex justify-center items-center gap-2 text-[10px] font-bold text-[#1C2C57] font-inter relative bottom-2">
                <CiShoppingBasket size={20} /> <span>8 Qop</span>
                </AlertDescription>
              </Alert>
              <Alert className="bg-[#FFCC15] h-8">
                <AlertDescription className="flex justify-center items-center gap-2 text-[10px] font-bold text-[#1C2C57] font-inter relative bottom-2">
                <IoScaleOutline size={20} />  <span>5 Qop olib kelindi</span>
                </AlertDescription>
              </Alert>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="hover:no-underline text-[16px] text-[#1C2C57] text-inter flex justify-between">Tuxum miqdori <span className="px-2 rounded-lg inline-block bg-[#1C2C57] text-[18px] font-bold text-[#FFCC15] relative left-10">8</span></AccordionTrigger>
            <AccordionContent className="bg-slate-200 mb-4 flex justify-center items-center rounded-lg p-2">
              <CiShoppingBasket size={20} /> <span>8 dona</span>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="hover:no-underline text-[16px] text-[#1C2C57] text-inter flex justify-between">Suv miqdori <span className="px-2 rounded-lg inline-block bg-[#1C2C57] text-[18px] font-bold text-[#FFCC15] relative left-12">14</span></AccordionTrigger>
            <AccordionContent className="bg-slate-200 mb-4 flex justify-center items-center rounded-lg p-2">
              <CiShoppingBasket size={20} /> <span>14 litr</span>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="flex item-4 ">
            <AccordionTrigger className="hover:no-underline text-[16px] text-[#1C2C57] text-inter  flex justify-between">Saryog' miqdori <span className="px-2 rounded-lg inline-block bg-[#1C2C57] text-[18px] font-bold text-[#FFCC15] relative left-10">20</span></AccordionTrigger>
            <AccordionContent className="bg-slate-200 mb-4 flex justify-center items-center rounded-lg p-2">
              <CiShoppingBasket size={20} /> <span>20 kg</span>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};
