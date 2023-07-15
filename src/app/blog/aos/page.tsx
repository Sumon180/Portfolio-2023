"use client";
import ScrollAnimation from "@/components/ScrollAnimation";
import { motion } from "framer-motion";
import React from "react";

const page = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="my-40  w-3/4 mx-auto">
          <ScrollAnimation />
        </div>
      </motion.div>
    </>
  );
};

export default page;
