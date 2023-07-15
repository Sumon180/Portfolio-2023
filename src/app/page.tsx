"use client";
import TextEffect from "@/components/TextEffect";
import { useEffect, useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [fullText, setFullText] = useState(
    "Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees."
  );
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 40);
    }
  }, [index]);

  return (
    <main className="my-40  w-3/4 mx-auto">
      <div>
        <h1>
          Welcome to profile <TextEffect />
        </h1>
        <p>{text}</p>
      </div>
    </main>
  );
}
