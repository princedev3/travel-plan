"use client";
import { Button } from "@/components/ui/button";
import { navLinksHeader } from "@/data";
import { useCartStore } from "@/libs/use-cart-store";
import { Menu } from "lucide-react";
import Image from "next/image";
import React from "react";

const Header = () => {
  const openModal = useCartStore((state) => state.setOpen);
  return (
    <div className="h-20  w-full flex justify-between items-center   px-7">
      <div className="">
        <Image src="/Logo.png" width={60} height={60} alt="logo" />
      </div>
      <div className="md:flex gap-5 items-center hidden ">
        {navLinksHeader.map((link, index) => (
          <span
            key={index}
            className="cursor-pointer text-gray-500 hover:text-gray-900"
          >
            {link.name}
          </span>
        ))}
      </div>
      <div className="flex gap-4 items-center">
        <span className="cursor-pointer text-gray-500 hover:text-gray-900">
          Login
        </span>
        <Button variant={"outline"}>Sign Up</Button>
        <Button
          onClick={() => openModal(true, "sidebarToggle")}
          variant={"outline"}
          className="md:hidden"
        >
          <Menu />
        </Button>
      </div>
      <div className="md:w-1/2 w-[75%] -z-20  h-[80vh] absolute top-0 right-0   ">
        <Image src={"/Decore.png"} fill alt="" />
        <div className="absolute w-[100px]  h-[100px] top-[20%] z-10 -left-8 ">
          <Image src={"/plane.png"} alt="" className="object-contain" fill />
        </div>
      </div>
    </div>
  );
};

export default Header;
