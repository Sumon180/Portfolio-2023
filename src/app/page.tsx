"use client";
import TextEffect from "@/components/TextEffect";

export default function Home() {
  const text = "Hello, World!";

  return (
    <main className="my-40  w-3/4 mx-auto">
      <div>
        <h1>HI, There this is Home page</h1>
        <h1>
          Welcome to <TextEffect />
        </h1>
      </div>
    </main>
  );
}
