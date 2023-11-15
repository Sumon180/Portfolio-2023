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
        }  absolute bg-rose-400 h-[30rem] w-[25rem] right-9 bottom-9 duration-300 rounded-lg p-5`}
      >
        <h6>Send message</h6>
        <div className="flex flex-col items-end gap-3 mt-5">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-md bg-transparent border outline-none px-3 py-2"
          />
          <textarea
            name=""
            id=""
            rows={5}
            placeholder="Type message"
            className="w-full h rounded-md bg-transparent border outline-none px-3 py-2"
          />
          <button className="bg-rose-600 px-7 py-2 rounded-md text-white">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Message;
