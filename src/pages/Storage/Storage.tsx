import { IoMdNotifications } from "react-icons/io";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { CiShoppingBasket } from "react-icons/ci";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { Alert, AlertDescription } from "../../components/ui/alert";
import { useNavigate } from "react-router-dom";
import { useGetByIdDoughroomQuery } from "../../app/api/doughroomApi";

export const Storage = () => {
  const navigate = useNavigate();
  const branchId = localStorage.getItem("selectedBranchId")
  const { data } = useGetByIdDoughroomQuery({id:branchId as string}, {skip:!branchId});
  

  return (
    <div>
      <header className="flex justify-between items-center border-b-2 border-b-[#FFCC15] pb-5 px-5 rounded-[30px] mt-4">
        <BsArrowLeftCircleFill
          onClick={() => navigate("/home")}
          size={25}
          color="#FFCC15"
        />
        <h1 className="text-white text-center font-inter text-[25px] font-bold tracking-[1px]">
          Omborxona
        </h1>
        <IoMdNotifications
          onClick={() => navigate("/notification")}
          size={25}
          color="#FFCC15"
        />
      </header>
      <div className="px-5">
        {data && data.warehouse.length > 0 ? (
  <Accordion
    type="single"
    collapsible
    className="w-full bg-[#fff] rounded-md mt-28 mr-5 px-5 hover:no-underline"
  >
    {Object.entries(
      data.warehouse.reduce<Record<string, typeof data.warehouse[0] & { count: number }>>((acc, store) => {
        const title = store.ingradient.title;
        if (!acc[title]) {
          acc[title] = {
            ...store,
            count: store.count,
          };
        } else {
          acc[title].count += store.count; // Bir xil title uchun count ni qo‘shamiz
        }
        return acc;
      }, {})
    ).map(([title, store]) => (
      <AccordionItem key={store._id} value={`item-${store._id}`}>
        <AccordionTrigger className="text-[16px] text-[#1C2C57] text-inter hover:no-underline">
          {title}
        </AccordionTrigger>
        <AccordionContent className="flex gap-3">
          <Alert className="bg-slate-200 h-8">
            <AlertDescription className="flex justify-center items-center gap-2 text-[10px] font-bold text-[#1C2C57] font-inter relative bottom-2">
              <CiShoppingBasket size={20} />{" "}
              <span>
                {store.count} {store.ingradient.scope}
              </span>
            </AlertDescription>
          </Alert>
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
) : (
  <p className="text-white text-center mt-5">Ma'lumot yuklanmoqda...</p>
)}

      </div>
    </div>
  );
};
