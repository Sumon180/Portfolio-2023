"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import aboutImg from "../../images/about.png";

const About = () => {
  const info = [
    { text: "Years experience", count: "04" },
    { text: "Completed Projects", count: "24" },
    { text: "Companies Work", count: "06" },
  ];

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="my-40  w-3/4 mx-auto">
          <section id="about" className="py-10 text-white">
            <div className="text-center mt-8">
              <h3 className="text-6xl font-semibold">
                About <span className="text-cyan-600">Me</span>
              </h3>
              <p className="text-gray-400 my-3 text-2xl">My introduction</p>
              <div className="flex justify-between md:flex-row flex-col-reverse items-center md:gap-6 max-w-full mx-auto">
                <div className="p-2 w-6/12">
                  <div className="text-gray-300 my-3">
                    <p className="text-justify leading-7 mx-auto">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsa eos, quam vel quisquam, explicabo sit labore
                      dignissimos optio ratione quibusdam doloribus pariatur
                      consequuntur sint. Reprehenderit cupiditate possimus
                      facere quasi voluptatem?
                    </p>
                    <div className="flex mt-10 items-center gap-7">
                      {info.map((content) => (
                        <div key={content.text}>
                          <h3 className="md:text-4xl text-2xl font-semibold text-white">
                            {content.count}
                            <span className="text-cyan-600">+</span>{" "}
                          </h3>
                          <span className="md:text-base text-xs">
                            {content.text}
                          </span>
                        </div>
                      ))}
                    </div>
                    <br />
                    <br />
                    <a href={"/cv/DevSumon.pdf"} download>
                      <button className=" bg-rose-600 px-10 py-3 font-semibold rounded-full">
                        Download CV
                      </button>
                    </a>
                  </div>
                </div>
                <div className="w-5/12 md:mt-0 mt-6 flex justify-end items-center">
                  <div className="lg:w-96 h-full relative sm:w-10/12 max-w-sm aboutImg ">
                    <Image
                      src={aboutImg}
                      alt=""
                      className="w-full object-cover bg-cyan-600 rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </motion.div>
    </>
  );
};

export default About;
