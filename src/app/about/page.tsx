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
        <div className="my-40  w-3/4 mx-auto">
        <h2 className="text-center mb-20 text-5xl underline">About me</h2>
        </div>
      </motion.div>
    </>
  );
};

export default About;
