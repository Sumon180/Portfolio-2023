import React, { useState, useEffect } from "react";

const PageUpButton = () => {
  const [showButton, setShowButton] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    console.log("Current Scroll Y:", currentScrollY);
    console.log("Last Scroll Y:", lastScrollY);

    if (currentScrollY < lastScrollY) {
      // Scrolling up, so show the button
      setShowButton(true);
    } else {
      // Scrolling down, so hide the button
      setShowButton(false);
    }

    setLastScrollY(currentScrollY);
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
      className={`fixed right-4 bottom-4 text-2xl bg-blue-500 text-white px-4 py-2 rounded-full shadow ${
        showButton ? "block" : "hidden"
      }`}
      onClick={handleClick}
    >
      ⇧
    </button>
  );
};

export default PageUpButton;
