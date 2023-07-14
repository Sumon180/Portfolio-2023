"use client";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Counter from "@/components/Counter";
import ScrollAnimation from "@/components/ScrollAnimation";
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
        <Link href={"/home"} className="fixed bottom-10 left-10">
          <button className="bg-green-500/70">Go to home page</button>
        </Link>
        <div>
          <h1 className="mb-10 text-center">State change by Redux</h1>
          <div className="flex flex-col items-center justify-center">
            <Button />
            <Counter />
          </div>
          <div>
            
            <Card />
            <ScrollAnimation />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Blog;