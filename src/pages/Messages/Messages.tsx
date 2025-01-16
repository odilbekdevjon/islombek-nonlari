import { Alert, AlertDescription } from "../../components/ui/alert";

// image
import person from "../../assets/person.svg";
export const Messages = () => {
  return (
    <>
      <header className="border-b-2 border-b-[#FFCC15] pb-5 px-5 rounded-[30px] mt-4">
        <h1 className="text-white text-center font-inter text-[25px] font-bold tracking-[1px]">
          Message
        </h1>
      </header>
      <div className="px-2 mt-10">
        <Alert className="flex gap-2 mb-5 p-2">
          <img src={person} width={50} alt="person" />
          <AlertDescription>
            <span className="font-bold text-[14px] text-[#1C2C57]">
              Shuhrat
            </span>
            <p className=" text-[12px] text-[#1C2C57]">Message</p>
          </AlertDescription>
        </Alert>
        <Alert className="flex gap-2 mb-5 p-2">
          <img src={person} width={50} alt="person" />
          <AlertDescription>
            <span className="font-bold text-[14px] text-[#1C2C57]">
              Shuhrat
            </span>
            <p className=" text-[12px] text-[#1C2C57]">Message</p>
          </AlertDescription>
        </Alert>
        <Alert className="flex gap-2 p-2">
          <img src={person} width={50} alt="person" />
          <AlertDescription>
            <span className="font-bold text-[14px] text-[#1C2C57]">
              Shuhrat
            </span>
            <p className=" text-[12px] text-[#1C2C57]">Message</p>
          </AlertDescription>
        </Alert>
      </div>
    </>
  );
};
