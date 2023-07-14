"use client";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Counter from "@/components/Counter";
import ScrollAnimation from "@/components/ScrollAnimation";
import DragDrop from "@/components/Drag&Drop";
import { motion } from "framer-motion";
import Link from "next/link";
import { FC } from "react";

const Blog: FC = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className={`${Style.blog}`}>
          <h1 className="mb-10 text-center">State change by Redux</h1>
          <div className="flex flex-col items-center justify-center">
            <Button />
            <Counter />
          </div>
          <div>
            <DragDrop />
            <Card />
            <ScrollAnimation />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Blog;