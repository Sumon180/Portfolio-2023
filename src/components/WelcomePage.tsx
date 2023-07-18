import { useEffect, useState } from "react";
import Image from "next/image";
import { BsLinkedin } from "react-icons/bs";
import TextEffect from "@/components/TextEffect";
import hero from "../images/hero.png";
import React from "react";
import hireMe from "../images/hireMe.png";

const WelcomePage = () => {
  const [text, setText] = useState("");
  const [fullText, setFullText] = useState(
    "Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees."
  );
  const [index, setIndex] = useState(0);

  const social_media = [
    "logo-instagram",
    "logo-facebook",
    "logo-linkedin",
    "logo-twitter",
  ];

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 40);
    }
  }, [index]);

  return (
    <div>
      <div>
        <h1 className="bg-gradient-to-r from-indigo-500 from-5% via-sky-500 via-30% to-emerald-500 to-90% text-transparent bg-clip-text">
          Welcome to my profile
        </h1>
        <h2 className="my-5">
          <TextEffect />
        </h2>
        <p>{text}</p>
        <div className=" bg-slate-600 h-[1px] mt-2" />
        <section
          id="home"
          className="flex justify-between py-10 lg:flex-row flex-col items-center"
        >
          <div className="lg:w-6/12 flex items-center justify-center h-full">
            <Image src={hero} alt="" className="h-full object-cover" />
          </div>
          <div className="lg:w-5/12 w-full">
            <div className="md:text-left text-center">
              <h1 className=" relative md:text-5xl text-2xl md:leading-normal leading-10 font-bold">
                <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
                <span className="text-cyan-600 md:text-6xl text-5xl">
                  Hello!
                  <br />
                </span>
                My Name is <span>Sumon</span>
              </h1>
              <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
                Fullstack Developer
              </h4>
              <button className="bg-slate-800 mt-8">Contact Me</button>
              <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
                {social_media?.map((icon) => (
                  <div
                    key={icon}
                    className="text-gray-600 hover:text-white cursor-pointer "
                  >
                    <span>
                      <BsLinkedin />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* hire me */}
        <section id="hireme" className="py-10 px-3 text-white">
          <div className="text-center">
            <h3 className="text-6xl font-semibold">
              Hire <span className="text-cyan-600">Me</span>
            </h3>
            <p className="text-gray-400 mt-3 text-lg">Do you have any work?</p>
          </div>
          <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-7xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center">
            <div>
              <h2 className="text-2xl font-semibold">
                Do you want any work from me?
              </h2>
              <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                dicta soluta quos tempore eos accusamus cupiditate, amet in
                similique sapiente obcaecati odio deleniti architecto corporis
                ratione. Consequatur a quidem maiores!
              </p>
              <button className="bg-slate-800 mt-10">Say Hello</button>
            </div>
            <Image
              src={hireMe}
              alt={""}
              width={500}
              className="lg:h-[40rem] h-80 lg:absolute bottom-0 -right-3 object-cover"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default WelcomePage;
