"use client";
import React from "react";
import Heading from "./heading";
import Image from "next/image";
import { Navigation } from "lucide-react";
import { motion } from "framer-motion";
import { destination } from "@/data";

const TopDestination = () => {
  const cardVariants = {
    hiddenLeft: { x: -100, opacity: 0 },
    hiddenRight: { x: 100, opacity: 0 },
    hiddenTop: { y: -100, opacity: 0 },
    visible: { x: 0, y: 0, opacity: 1 },
  };
  return (
    <div className="relative p-10  my-10 ">
      <Heading title="Top Selling" description="Top Destinations" />

      <div className=" relative">
        <div className="relative mx-auto max-w-4xl  grid grid-cols-1 gap-[75px] md:grid-cols-2 lg:grid-cols-3  mt-7">
          {destination.map((item, index) => {
            const isLeft = index % 3 === 0;
            const isRight = index % 3 === 2;
            const variant = isLeft
              ? "hiddenLeft"
              : isRight
              ? "hiddenRight"
              : "hiddenTop";
            return (
              <motion.div
                variants={cardVariants}
                initial={variant}
                animate="visible"
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}
                key={item.id}
                className="relative grid max-w-3xl  h-[300px] rounded-lg "
              >
                <Image
                  key={item.id}
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover  rounded-lg   mx-auto"
                />
                <div className="absolute  rounded-b-lg w-full left-0 -bottom-11 z-10 shadow-2xl py-3 px-2 bg-white">
                  <div className="flex justify-between items-center">
                    <h3 className=" text-xs text-blue-950  capitalize">
                      {item.title}
                    </h3>
                    <p className="text-xs text-blue-950 ">{item.price}</p>
                  </div>
                  <div className="mt-2 flex items-center gap-1">
                    <Navigation
                      className="fill-blue-950  stroke-blue-950 "
                      size={14}
                    />
                    <span className="text-xs text-blue-950 ">{item.trip} </span>
                  </div>
                </div>
                {index === destination.length - 1 && (
                  <div className="absolute bottom-0 -right-10 -z-10 w-20 h-full ">
                    <Image
                      src="/spring.png"
                      alt="Special Icon"
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TopDestination;
