"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../images/s-logo.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const menuLinks = [
    { name: "HOME", link: "/home" },
    { name: "ABOUT", link: "/about" },
    { name: "SKILLS", link: "/skills" },
    { name: "PROJECTS", link: "/projects" },
    { name: "BLOG", link: "/blog" },
    { name: "CONTACT", link: "/contact" },
  ];
  useEffect(() => {
    window.addEventListener("scroll", () => {
      document.querySelector("nav");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    <nav
      className={`fixed w-full left-0 top-0 z-[999]  ${
        sticky ? "bg-gray-900/60  text-gray-900" : "text-white bg-[#0f172a]"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex gap-2 mx-20">
          <div className=" flex items-center justify-center">
            <Image src={logo} alt={""} width={40} />
          </div>
          <h6 className="uppercase font-bold text-gray-300 text-4xl">
            S<span className="text-[#e5a02d]">umo</span>n
          </h6>
        </div>
        <div
          className={` ${
            sticky
              ? "lg:bg-white/0 bg-[white] text-gray-300"
              : "shadow-lg shadow-black text-gray-400"
          }  lg:block hidden px-7 py-2 font-medium  rounded-bl-full`}
        >
          <ul className="flex items-center gap-1 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li
                key={i}
                className="px-6 hover:text-rose-600 transition-all duration-200"
              >
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className={`z-[999] text-gray-300 cursor-pointer ${
            open ? "text-gray-900" : "text-gray-100"
          } text-3xl lg:hidden m-5`}
        >
          Burg
        </div>
        <div
          className={`lg:hidden text-gray-900 absolute w-2/3 h-screen
      px-7 py-2 font-medium bg-gray-500 top-0 duration-300 ${
        open ? "right-0" : "right-[-100%]"
      }`}
        >
          <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li
                onClick={() => setOpen(false)}
                key={i}
                className="px-6 hover:text-cyan-600"
              >
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
