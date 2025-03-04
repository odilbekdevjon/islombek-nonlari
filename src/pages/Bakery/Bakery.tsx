import { BsArrowLeftCircleFill } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Alert, AlertDescription } from "../../components/ui/alert";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "../../components/ui/dialog";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useGetByIdDoughroomQuery, usePostDoughroomMutation } from "../../app/api/doughroomApi";
import dayjs from "dayjs";
import { Toaster, toast } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";

export const Bakery = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const branchId = localStorage.getItem("selectedBranchId")
  const { data } = useGetByIdDoughroomQuery({id:branchId as string}, {skip:!branchId});
  const [ postDoughroom ] = usePostDoughroomMutation();
  const [isOpen, setIsOpen] = useState(false);

  const handleAddDough = async () => {
      if (!value || isNaN(Number(value))) {
      toast.error("Xamir sonini to'g'ri kiriting!");
      return;
    }

    try {
      const response = await postDoughroom({ doughroom: branchId, count: Number(value) });

      if ("error" in response) {
        throw new Error("Xatolik yuz berdi!");
      }

      toast.success("Xamir miqdori qo‘shildi!");
      setIsOpen(false); 
      setValue(""); 
    } catch (error) {
      console.log(error);      
    }

  }

  return (
    <>
      <header className="flex justify-between items-center border-b-2 border-b-[#FFCC15] pb-5 px-5 rounded-[30px] mt-3">
      <Toaster position="top-center" reverseOrder={false} />
        <BsArrowLeftCircleFill
          onClick={() => navigate("/home")}
          size={25}
          color="#FFCC15"
        />
        <h1 className="text-white text-center font-inter text-[25px] font-bold tracking-[1px]">
          Xamir miqdori
        </h1>
        <IoMdNotifications
          onClick={() => navigate("/notification")}
          size={25}
          color="#FFCC15"
        />
      </header>
      <div className="px-4 mt-10">
        {data && data.doughs.length > 0 ? (
            data?.doughs.map((dough:any) => (
              <div
                key={dough._id}
                className="w-full bg-white border-2 border-solid border-[#FFCC15] mt-5 rounded-lg p-4"
              >
                <Alert className="bg-[#F5F6F8] p-2">
                  <AlertDescription className="font-bold text-[#1C2C57] font-inter text-center">
                    Xamir soni: {dough.count}
                  </AlertDescription>
                </Alert>
                <div className="flex gap-5 mt-5">
                  <Alert className="bg-[#F5F6F8] p-2">
                    <AlertDescription className="font-bold text-[#1C2C57] font-inter text-center">
                      Vaqti: {dayjs(dough.createdAt).format("HH:mm:ss")}
                    </AlertDescription>
                  </Alert>
                  <Alert className="bg-[#F5F6F8] p-2">
                    <AlertDescription className="font-bold text-[#1C2C57] font-inter text-center">
                      Timer: 00:20:35
                    </AlertDescription>
                  </Alert>
                </div>
              </div>
            ))
        ) : (
          <p className="text-white text-center mt-5">Ma'lumot yuklanmoqda...</p>
        )}
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <div className="flex justify-end items-end relative min-h-[30vh] p-4">
            <Button
              variant="outline"
              className="rounded-[30px] p-4 bg-[#FFCC15] "
            >
              <FaPlus size={25} />
            </Button>
          </div>
        </DialogTrigger>
        <DialogContent className="border-2 border-[#FFCC15] bg-transparent rounded-lg text-[#FFCC15]">
          <div className="flex items-center gap-4">
            <div className="">
              <Label htmlFor="name" className="text-right ">
                Xamir soni
              </Label>
              <Input
                id="name"
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="2"
                className="mt-2 text-[#1C2C57] font-bold font-inter"
              />
            </div>
            <Button
              className="mt-8 bg-[#FFCC15] text-[#1C2C57] hover:bg-[#FFCC15]"
              type="submit"
              onClick={handleAddDough}
            >
              Save 
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
