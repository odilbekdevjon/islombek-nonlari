import { Link, useNavigate } from "react-router-dom";
// icons
// import { IoMdNotifications } from "react-icons/io";
import { BiSolidMessageError } from "react-icons/bi";
export const Main = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full  mt-5">
      <div className="mt-10 ml-5">
        <BiSolidMessageError size={25} color="#FFCC15" />
      </div>
      <div className="flex gap-5 mt-10 justify-center px-5">
        <Link
          className="w-[163px] h-[131px] bg-white rounded-lg border-2 border-solid border-[#FFCC15] text-[#1C2C57] text-center font-bold text-[20px] py-11"
          to={"/store"}
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
  );
};
