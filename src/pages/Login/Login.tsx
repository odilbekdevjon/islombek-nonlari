import { useEffect, useState } from "react";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";

// images
import logo from "../../assets/logo.svg";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useLoginMutation } from "../../app/api";
import { useStorage } from "../../utils";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

export const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading  }] = useLoginMutation();
  const navigate = useNavigate();
  const token = localStorage.getItem("ACCESS_TOKEN");

  useEffect(() => {
    if (token) {
      navigate("/home", { replace: true });
    }
  }, [token, navigate]);

  const loginSubmit = async () => {
    if (!username || !password) {
      toast.error("Iltimos, barcha maydonlarni to‘ldiring!");
      return;
    }
    try {
      const response = await login({ username, password }).unwrap();
      useStorage.setCredentials({ token: response?.token });

      if (response.token) {
        toast.success("Muvaffaqiyatli tizimga kirdingiz!");
        setTimeout(() => navigate("/home"), 1500);
      }

      if (response.token) {
        navigate("/home");
      }
    } catch (err) {
      console.error(err);
      toast.error("Xatolik yuz berdi! Login yoki parol xato.");
    }
  };

  return (
    <div className="w-full px-5">
      <Toaster position="top-center" reverseOrder={false} />
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
      <div>
        <Input
          className="mt-5 focus:outline-none"
          required
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <div className="relative mt-5">
          <Input
            className="pr-10 outline-none"
            required
            type={isPasswordVisible ? "text" : "password"}
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            {isPasswordVisible ? <FiEyeOff size={20} /> : <FiEye size={20} />}
          </button>
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          onClick={loginSubmit}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              loginSubmit();
            }
          }}
          className="w-full mt-[120px] bg-[#FFCC15] font-bold text-black text-center text-[25px] hover:bg-[#FFCC15]"
        >
          {isLoading ? "Loading..." : "Login"}
        </Button>
      </div>
    </div>
  );
}
