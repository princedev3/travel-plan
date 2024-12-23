"use client";
import Airport from "@/icons/airport";
import Dir from "@/icons/dir";
import Leaf from "@/icons/leaf";
import Payment from "@/icons/payment";
import Rect from "@/icons/rect";
import Stat from "@/icons/stat";
import Yellow from "@/icons/yellow";
import { Heart } from "lucide-react";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const EasyAndFast = () => {
  return (
    <div className=" p-10 grid grid-flow-row gap-y-7 my-10">
      <h1 className="text-blue-950 text-lg">Easy and Fast</h1>
      <div className="grid grid-cols-1  lg:grid-cols-2 gap-10">
        <div className=" ">
          <h1 className="text-4xl font-bold text-blue-950">
            Book your next trip
          </h1>
          <h1 className="text-4xl font-bold text-blue-950 mt-2">
            in 3 easy steps
          </h1>
          <div className="grid grid-flow-row gap-4">
            <div className="flex gap-4 items-center">
              <Yellow size={30} />
              <div className="">
                <h1 className="text-lg font-semibold text-blue-950 mt-4">
                  {" "}
                  Choose Destination
                </h1>
                <p className="text-sm text-blue-950">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.{" "}
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <Payment size={30} />
              <div className="">
                <h1 className="text-lg font-semibold text-blue-950 mt-4">
                  {" "}
                  Make Payment
                </h1>
                <p className="text-sm text-blue-950">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.{" "}
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <Airport size={30} />
              <div className="">
                <h1 className="text-lg font-semibold text-blue-950 mt-4">
                  {" "}
                  Reach Airport on Selected Date
                </h1>
                <p className="text-sm text-blue-950">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="shadow-lg rounded-lg p-6 relative  "
        >
          <div className="bg-[url('/shadow.png')]  left-1/2 -top-1/2 absolute w-[400px] h-[400px] bg-cover bg-center bg-no-repeat -z-20 opacity-30 " />
          <div className="w-full h-[15vh] relative rounded-2xl overflow-hidden">
            <Image
              src={"/sani.jpg"}
              alt=""
              fill
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex flex-col gap-1 mt-3 relative">
            <h1 className="text-blue-950">Trip To Greece</h1>
            <p className="text-blue-950">
              14-29 June | <span className="">by Robbin joseph</span>
            </p>
            <div className="flex gap-4 ">
              <div className="bg-gray-300 w-10 h-10 rounded-full flex justify-center items-center">
                <Leaf size={20} />
              </div>
              <div className="bg-gray-300 w-10 h-10 rounded-full flex justify-center items-center">
                <Rect size={20} />
              </div>
              <div className="bg-gray-300 w-10 h-10 rounded-full flex justify-center items-center">
                <Dir size={20} />
              </div>
            </div>

            <div className="flex justify-between items-center mt-4">
              <div className="flex gap-2">
                {" "}
                <Stat size={20} />{" "}
                <p className="text-blue-950">24 people going</p>
              </div>
              <Heart className="stroke-blue-600  w-6 h-6" />
            </div>
            <div className=" p-4 bg-white rounded-lg absolute -right-10 flex gap-4 shadow-sm min-w-[200px] ">
              <Image
                src={"/mask.png"}
                alt=""
                width={40}
                height={40}
                className="rounded-full max-w-[40px] max-h-[40px] object-cover "
              />
              <div className="flex flex-col gap-1">
                <p className="text-sm text-blue-950">Ongoing</p>
                <p className="text-sm text-blue-950">Trip to rome</p>
                <p className="text-sm text-blue-950">
                  <span className="text-blue-600">40% </span> completed
                </p>
                <div className="w-full bg-gray-300 rounded-lg">
                  <p className="bg-blue-600  w-1/2 px-2 py-1 rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EasyAndFast;
