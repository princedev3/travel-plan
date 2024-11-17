"use client";
import React from "react";
import { motion } from "framer-motion";

const Heading = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, type: "spring", stiffness: 100, damping: 10 }}
      className="grid  gap-y-4 mx-auto justify-center items-center max-w-screen-lg"
    >
      <h1 className="text-lg font-medium tracking-wide  text-center text-blue-950 ">
        {title}
      </h1>
      <p className="text-3xl font-bold text-center text-blue-950">
        {description}
      </p>
    </motion.div>
  );
};

export default Heading;
