import React, { FC, useRef, useState } from "react";
import { BiSolidCopy } from "react-icons/bi";

interface CopyableBoxProps {
  text: string;
}

const CopyableBox: FC<CopyableBoxProps> = ({ text }) => {
  const textRef = useRef<HTMLTextAreaElement>(null);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    if (textRef.current) {
      textRef.current.select();
      navigator.clipboard.writeText(textRef.current.value);
    }
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };

  return (
    <div className="bg-black rounded-md max-w-4xl mx-auto mt-5">
      <div
        onClick={handleCopy}
        className="flex gap-2 rounded-t-md flex-row items-center justify-end bg-slate-950 pr-3 py-2 cursor-pointer"
      >
        <button className="text-white rounded focus:outline-none">
          <BiSolidCopy />
        </button>
        <span className=" text-sm">{isCopied ? "Copied" : "Copy code"}</span>
      </div>
      <textarea
        ref={textRef}
        readOnly
        className="w-full h-80 bg-black resize-none selection:bg-none p-4 rounded focus:outline-none"
        value={text}
      />
    </div>
  );
};

export default CopyableBox;
