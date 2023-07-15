"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const Skills = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="my-40  w-3/4 mx-auto">
          <h1>Skills</h1>
        </div>
      </motion.div>
    </>
  );
};

export default Skills;
