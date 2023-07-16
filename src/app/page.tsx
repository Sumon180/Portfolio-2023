"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import TextEffect from "@/components/TextEffect";
import hero from "../images/hero.png";

export default function Home() {
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
    <main className="my-40  w-3/4 mx-auto">
      <div>
        <h1>Welcome to profile</h1>
        <h2>
          <TextEffect />
        </h2>
        <p>{text}</p>
        <div className=" bg-slate-600 h-[1px] mt-2" />
        <section
          id="home"
          className="flex py-10 md:flex-row flex-col items-center"
        >
          <div className="flex-1 flex items-center justify-center h-full">
            <Image
              src={hero}
              alt=""
              className="md:w-11/12 h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="md:text-left text-center">
              <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
                <span className="text-cyan-600 md:text-6xl text-5xl">
                  Hello!
                  <br />
                </span>
                My Name is <span>Sumon</span>
              </h1>
              <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
                Fullstack Developer
              </h4>
              <button className="btn-primary mt-8">Contact Me</button>
              <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
                {social_media?.map((icon) => (
                  <div
                    key={icon}
                    className="text-gray-600 hover:text-white cursor-pointer "
                  >
                    <span>%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
