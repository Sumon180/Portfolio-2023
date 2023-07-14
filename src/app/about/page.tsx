"use client";
import React from "react";
import styles from "./page.module.css";
import { motion } from "framer-motion";
import Link from "next/link";

const About = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center justify-center h-screen overflow-x-hidden">
          <h1>About</h1>
          <Link href={"/"} className="fixed bottom-10 left-10">
            <button className="bg-green-500/70">Go to home page</button>
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default About;
