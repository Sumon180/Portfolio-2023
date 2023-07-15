"use client";
import { projects } from "@/data/data";
import { motion } from "framer-motion";
import Image from "next/image";
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
        <div className="my-40  w-3/4 mx-auto">
          <div className="grid grid-cols-3 gap-20">
            {projects.map((project) => (
              <Image
                key={project.id}
                src={project.img}
                alt={""}
                width={500}
                height={300}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Projects;
