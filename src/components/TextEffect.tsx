import Typewriter from "typewriter-effect";

import React from "react";

const TextEffect = () => {
  return (
    <Typewriter
      options={{
        strings: ["MERN Expert", "MERN Expert", "MERN Expert"],
        autoStart: true,
        delay: 50,
        loop: true,
      }}
    />
  );
};

export default TextEffect;
