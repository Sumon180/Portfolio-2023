import Typewriter from "typewriter-effect";

import React from "react";

const TextEffect = () => {
  return (
    <Typewriter
      options={{
        strings: ["MERN Expert", "Full-Stack Developer", "Web Developer"],
        autoStart: true,
        delay: 50,
        loop: true,
      }}
    />
  );
};

export default TextEffect;
