"use client";
import { projects } from "@/data/data";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import style from "./page.module.css";

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
          <h2 className="text-center mb-20 text-5xl underline">My Project</h2>
          <div className="flex flex-wrap justify-center gap-20 my-20">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={project.link}
                className="hoverable bg-black h-[250px] relative overflow-hidden"
              >
                <Image
                  src={project.img}
                  alt={""}
                  width={400}
                  className="h-full"
                />
                <div className="bg-black/70 w-full h-full absolute left-0 top-[500px] flex justify-center items-center view-details">
                  <button className="bg-rose-500 font-semibold text-xl rounded-md">
                    View project
                  </button>
                </div>
              </Link>
            ))}
          </div>
          <h2 className="text-center mb-20 text-5xl underline">
            Another Projects
          </h2>
        </div>
      </motion.div>
    </>
  );
};

export default Projects;
