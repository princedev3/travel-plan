"use client";
import React from "react";
import Heading from "./heading";
import Image from "next/image";
import { motion } from "framer-motion";
import { services } from "@/data";

const Services = () => {
  const [activeId, setActiveId] = React.useState<string | null>(null);

  const fadeInAnimation = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 * index,
      },
    }),
  };
  return (
    <div className="relative p-10  my-10">
      <div className="absolute top-0 right-[40px]  w-[120px] h-[120px] bg-[url('/card.png')] opacity-75"></div>
      <Heading title="CATEGORY" description="We Offer Best Services" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-10 mt-10">
        {services.map((service, index) => (
          <motion.div
            variants={fadeInAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            onClick={() => setActiveId(service.id)}
            key={index}
            className={`${
              service.id === activeId ? "shadow-lg rounded-[40px] bg-white" : ""
            } flex flex-col items-center cursor-pointer min-h-[40vh] w-[250px] relative mx-auto `}
          >
            <div
              className={`${
                activeId === service.id ? "opacity-100" : "opacity-0 hidden"
              }  bg-[url('/rec.png')] opacity-100 w-[100px] h-[100px] absolute -bottom-8 -left-8 -z-10`}
            />
            <div
              className={`${
                service.id === "2" ? "w-[90px] h-[90px]" : "mt-8  mb-5 "
              } w-[50px] h-[50px] relative `}
            >
              <Image
                src={service.img}
                alt={service.title}
                fill
                className="object-cover w-full h-full"
              />
            </div>
            <div className="">
              <h3 className="text-xl text-blue-950 font-bold flex items-center w-full justify-center">
                {service.title}
              </h3>
              <p className="text-blue-950 text-sm  mx-auto mt-2 flex items-center w-[80%] text-center justify-center">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
