"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const Projects = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center justify-center h-screen overflow-x-hidden">
          <h1>Project</h1>
        </div>
      </motion.div>
    </>
  );
};

export default Projects;
