
import React, { useState, useEffect } from "react";

const PageUpButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`${
        showButton ? "block" : "hidden"
      } fixed right-4 bottom-4 text-2xl bg-blue-500 text-white px-4 py-2 rounded-full shadow`}
      onClick={handleClick}
    >
      ⇧
    </button>
  );
};

export default PageUpButton;
