import Link from "next/link";
import React from "react";

const BlogHeader = () => {
  return (
    <div className="border-b border-slate-700 w-10/12 mx-auto flex items-center justify-between py-5">
      <h2>My Blog</h2>
      <div className="flex gap-5">
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
    </div>
  );
};

export default BlogHeader;
