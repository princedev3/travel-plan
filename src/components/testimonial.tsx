"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { testimonials } from "@/data";

const Testimonial = () => {
  return (
    <div className="relative p-10 grid gap-y-5 my-10 ">
      <h1 className="text-blue-950 text-lg">Testimonials</h1>
      <div className="grid md:grid-cols-[1.5fr_2fr]   gap-20 md:gap-6">
        <div className="flex md:flex-col items-center md:items-start gap-2">
          <h1 className="text-5xl font-bold text-blue-950">
            What people say <br className="hidden md:block " />
            About Us.
          </h1>
        </div>
        <div className="">
          <Carousel
            opts={{
              align: "start",
            }}
            orientation="vertical"
            className="w-full "
          >
            <CarouselContent className="-mt-1 gap-10 h-[300px] ">
              {testimonials.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="pt-1 md:basis-1/2 overflow-visible"
                >
                  <div className="p-1 relatve">
                    <Card className="h-[250px] overflow-visible">
                      <CardContent className="flex relative w-full h-full flex-col justify-between p-6">
                        <div className="relative w-[60px] h-[60px] min-w-[60px] min-h-[60px] ">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="rounded-full  w-fit max-w-[40px] object-cover max-h-[40px] "
                          />
                        </div>
                        <span className="  text-blue-950/60">{item.text}</span>
                        <div className="flex flex-row justify-between items-center lg:items-start lg:flex-col gap-1">
                          <span className="text-lg font-bold  text-blue-950/60">
                            {item.name}
                          </span>
                          <span className="text-sm  text-blue-950/60">
                            {item.role}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
