import React from "react";

const Buttons = () => {
  return (
    <section className=" my-16">
      <div className="relative inline-flex items-center justify-center mt-8 sm:mt-12 group">
        <div className="absolute transition-all duration-200 rounded-md -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
        <a
          href="#"
          title=""
          className="relative inline-flex items-center justify-center px-8 py-3 text-base font-normal text-white  border border-transparent rounded-md"
          role="button"
        >
          Join our team
        </a>
      </div>
    </section>
  );
};

export default Buttons;
