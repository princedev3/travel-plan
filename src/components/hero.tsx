"use client";
import React from "react";
import { Button } from "./ui/button";
import { Play } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div>
      <div className="p-10 flex flex-col-reverse md:grid md:grid-cols-2 gap-y-6 ">
        <div className="p-3 grid   mx-auto gap-y-5 ">
          <p className="text-orange-600 font-medium ">
            Best Destinations around the world
          </p>
          <div className=" ">
            <h1 className="text-blue-950 w-full  leading-tight font-bold text-[44px] ">
              Travel, enjoy <br className="hidden md:block" /> and live a new{" "}
              <br /> and full life
            </h1>
          </div>
          <p className="font-medium text-blue-950  ">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>
          <div className="flex items-center gap-4">
            <Button className="bg-yellow-600 shadow shadow-yellow-600 text-white w-[170px] !py-6 text-base   ">
              Find out more
            </Button>
            <Button className="bg-transparent hover:bg-transparent shadow-none ">
              <div className="flex gap-2 items-center">
                <div className="!bg-orange-600  shadow-lg shadow-orange-600 w-7 h-7 p-2 rounded-full flex items-center justify-center">
                  <Play className="text-white" />
                </div>
                <span className="text-blue-950 capitalize text-base">
                  play demo
                </span>
              </div>
            </Button>
          </div>
        </div>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, type: "spring", stiffness: 100 }}
          className=" relative min-h-[40vh] "
        >
          <Image src={"/travel.png"} alt="" className="object-contain" fill />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
