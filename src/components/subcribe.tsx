import React from "react";
import { Button } from "./ui/button";
import { Mail } from "lucide-react";
import Send from "@/icons/send";
import Image from "next/image";

const Subcribe = () => {
  return (
    <div className="relative p-10 grid mx-auto my-10  overflow-hidden z-0">
      <div className="bg-[#DFD7F9]/40  relative rounded-tl-[120px] rounded-3xl  z-0 p-7 md:p-16 grid place-content-center gap-y-6 md:gap-y-10 ">
        <div className="bg-blue-900 w-fit absolute -top-2 rounded-full -right-2 md:-right-3 ">
          <Send size={40} />
        </div>
        <div className=" w-fit absolute -z-50 -bottom-10 -right-2 md:-right-3 ">
          <Image
            src={"/card.png"}
            width={100}
            height={100}
            alt=""
            className="object-cover -z-50"
          />
        </div>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-950/70 text-center  md:w-[70%] mx-auto mb-2">
          Subscribe to get information, latest news and other interesting offers
          about Jadoo
        </h1>
        <div className="flex flex-col justify-center  items-center gap-6">
          <div className="flex items-center  bg-white w-full  rounded px-3 py-2">
            <Mail className="text-gray-300 mr-2" />
            <input
              type="email"
              placeholder="Your email"
              className="outline-none  text-blue-800 w-full flex-1 placeholder:text-gray-300"
            />
          </div>
          <Button
            variant={"default"}
            className="bg-orange-600 font-medium py-4 text-lg text-white "
          >
            Subcribe
          </Button>
        </div>
        <div
          style={{
            backgroundImage: "url('/spiral.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "cover",
          }}
          className="absolute bottom-0  top-[30%]  left-0 w-[50%]  h-[70%]  object-cover -z-10 opacity-25"
        />
      </div>
    </div>
  );
};

export default Subcribe;
