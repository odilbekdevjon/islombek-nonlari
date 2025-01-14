
// images
import img from "../../assets/right-side.svg";
export const Header = () => {
    return(
        <header className="w-full flex justify-between items-center px-5 mt-5">
            <time className="text-[#F9FAFC] font-inter text-[15px] font-bold leading-[20px]">9:41</time>
            <img src={img} width={70} height={15} alt="" />
        </header>
    )
}