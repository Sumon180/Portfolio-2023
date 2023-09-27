import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

const BlogHeader = () => {
  const [header, setHeader] = useState(false);
  return (
    <div className="border-b border-slate-700 w-11/12 mx-auto flex items-center justify-between py-5">
      <h2>My Blog</h2>
      <div className="hidden xl:flex gap-5">
        <Link href={"/"} className="bg-slate-800 hover:bg-slate-700 px-10 py-2">
          Content
        </Link>
        <Link href={"/"} className="bg-slate-800 hover:bg-slate-700 px-10 py-2">
          Animation
        </Link>
        <Link href={"/"} className="bg-slate-800 hover:bg-slate-700 px-10 py-2">
          Drag & Drop
        </Link>
        <Link
          href={"/blog/buttons"}
          className="bg-slate-800 hover:bg-slate-700 px-10 py-2"
        >
          Button
        </Link>
        <Link href={"/"} className="bg-slate-800 hover:bg-slate-700 px-10 py-2">
          Card
        </Link>
        <Link href={"/"} className="bg-slate-800 hover:bg-slate-700 px-10 py-2">
          News Letter
        </Link>
      </div>
      <div
        onClick={() => setHeader(true)}
        className="xl:hidden cursor-pointer text-3xl"
      >
        <AiOutlineArrowLeft />
      </div>

      <div
        className={`fixed top-24 duration-300 bg-slate-800 z-50 p-10 ${
          header ? "right-5" : "-right-96"
        }`}
      >
        <button onClick={() => setHeader(false)}>
          <AiOutlineArrowLeft className="rotate-180 text-xl" />
        </button>
        <div className={`flex flex-col gap-5 mt-5 font-medium`}>
          <Link
            href={"/"}
            className="bg-slate-800 hover:bg-slate-700 font-medium"
          >
            Content
          </Link>
          <Link href={"/"} className="bg-slate-800 hover:bg-slate-700">
            Animation
          </Link>
          <Link href={"/"} className="bg-slate-800 hover:bg-slate-700">
            Drag & Drop
          </Link>
          <Link
            href={"/blog/buttons"}
            className="bg-slate-800 hover:bg-slate-700"
          >
            Button
          </Link>
          <Link href={"/"} className="bg-slate-800 hover:bg-slate-700">
            Card
          </Link>
          <Link href={"/"} className="bg-slate-800 hover:bg-slate-700">
            News Letter
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
