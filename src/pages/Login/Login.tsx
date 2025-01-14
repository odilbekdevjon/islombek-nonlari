import { useState } from "react";
import { Input } from "../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Button } from "../../components/ui/button";

// images
import logo from "../../assets/logo.svg";
import { FiEye, FiEyeOff, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="w-full px-5">
      <h1 className="text-center text-[30px] text-[#fff] font-bold tracking-[0.9px] font-inter mt-5">
        Xamirxona
      </h1>
      <img
        className="block mx-auto mt-5"
        src={logo}
        width={165}
        height={165}
        alt="logo"
      />
      <p className="text-center text-[30px] font-bold tracking-[0.9px] text-white font-inter mt-2">
        Tizimga kirish
      </p>
      <form action="">
        <Input className="mt-5 focus:outline-none" type="text" placeholder="username" />
        <div className="relative mt-5">
          <Input
            className="pr-10 outline-none"
            type={isPasswordVisible ? "text" : "password"}
            placeholder="password"
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            {isPasswordVisible ? <FiEyeOff size={20} /> : <FiEye size={20} />}
          </button>
        </div>
        <Select open={open} onOpenChange={setOpen}>
          <SelectTrigger className="w-full mt-8 none">
            <SelectValue placeholder="Select a branch" />
            {
              open ? (
                <FiChevronUp className="text-xl absolute right-8 top-1/1 transform -translate-y-1/5" />
              ) : (
                <FiChevronDown className="text-xl absolute right-8 top-1/1 transform -translate-y-1/5" />
              )
            }
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Branchs</SelectLabel>
              <SelectItem value="angor">Angor</SelectItem>
              <SelectItem value="sherabod">Sherabod</SelectItem>
              <SelectItem value="jaqorgon">Jarqo'rg'on</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button onClick={() => navigate('/home')} className="w-full mt-[100px] bg-[#FFCC15] font-bold text-black text-center text-[25px] hover:bg-[#FFCC15]">Login</Button>
      </form>
    </div>
  );
};
