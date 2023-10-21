"use client";

import React, { useState } from "react";

const Message = () => {
  const [chat, setChat] = useState(false);
  return (
    <div className="fixed bottom-16 right-16 z-50">
      <div className="relative message">
        <button
          onClick={() => setChat(!chat)}
          className="bg-rose-600 w-10 h-10 rounded-full text-white"
        >
          +
        </button>
        <div className="absolute bottom-8 right-8 hidden message-tooltip duration-300">
          Send message
        </div>
      </div>
      <div
        className={`${
          chat ? "scale-1 origin-bottom-right" : "scale-0 origin-bottom-right"
        } absolute bg-rose-400 h-[30rem] w-[25rem] right-9 bottom-9 duration-300`}
      >
        HI
      </div>
    </div>
  );
};

export default Message;
