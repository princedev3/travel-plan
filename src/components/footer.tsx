import { navLinks } from "@/data";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="p-10 grid w-full gap-6 grid-cols-[repeat(auto-fill,minmax(210px,1fr))]">
        <div className="flex flex-col gap-3">
          <Image src={"/footer-jadoo.png"} width={150} height={150} alt="" />
          <div className="">
            <p className=" text-gray-500">Book your trip in minute, get full</p>
            <p className=" text-gray-500">Control for much longer.</p>
          </div>
        </div>
        <>
          {navLinks.map((nav, index) => (
            <div key={index} className="flex flex-col gap-3">
              <h2 className="text-gray-600 font-bold capitalize text-lg">
                {nav.name}
              </h2>
              <ul className="flex flex-col gap-3">
                {nav.links.map((link, index) => (
                  <li key={index} className="text-gray-500 hover:text-gray-900">
                    {link.title}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </>
        <div className="">
          <div className="flex gap-3 items-center mb-3">
            <div className="shadow-sm rounded-full p-2">
              <Facebook className="w-[18px] h-[18px] fill-black  " />
            </div>
            <div className="bg-gradient-to-l from-purple-400 to-pink-500 rounded-full p-1">
              <Instagram className="w-[18px] text-white  h-[18px] " />
            </div>
            <div className="shadow-sm rounded-full p-2">
              <Twitter className="w-[18px] h-[18px] " />
            </div>
          </div>
          <div className="">
            <h2 className="text-gray-600 text-lg">Discover our app</h2>
            <div className="flex items-center gap-3">
              <Image
                src={"/google-play.png"}
                alt=""
                width={60}
                height={60}
                className="object-contain"
              />
              <Image
                src={"/apple.png"}
                alt=""
                width={60}
                height={60}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <p className="text-gray-500 text-center my-9">
        All right reserved © 2024 Travel Plan.
      </p>
    </>
  );
};

export default Footer;
