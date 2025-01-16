import { Link } from "react-router-dom";
// icons
// import { IoMdNotifications } from "react-icons/io";
import { BiSolidMessageError } from "react-icons/bi";
import { IoMdNotifications } from "react-icons/io";
export const Main = () => {
  return (
    <div>
         <header className="flex justify-center items-center border-b-2 border-b-[#FFCC15] pb-5 rounded-[30px] mt-3">
            <h1 className="text-white text-center font-inter text-[25px] font-bold tracking-[1px]">Jo'raboyeva</h1>
            <IoMdNotifications className="relative left-[80px]" size={25}  color="#FFCC15" />
        </header> 
        <div className="w-full  mt-5">
      <div className="mt-10 ml-5">
        <BiSolidMessageError size={25} color="#FFCC15" />
      </div>
      <div className="flex gap-5 mt-10 justify-center px-5">
        <Link
          className="w-[163px] h-[131px] bg-white rounded-lg border-2 border-solid border-[#FFCC15] text-[#1C2C57] text-center font-bold text-[20px] py-11"
          to={"/storage"}
        >
          Omborxona
        </Link>
        <Link
          className="w-[163px] h-[131px] bg-white rounded-lg border-2 border-solid border-[#FFCC15] text-[#1C2C57] text-center font-bold text-[20px] py-11"
          to={""}
        >
          Xamir
        </Link>
      </div>
    </div>
    </div>
  );
};
