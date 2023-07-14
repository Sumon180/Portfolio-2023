"use client";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen overflow-x-hidden">
      <h1>Opps!</h1>
      <p className=" text-2xl my-3">404 Page not found</p>
      <Link href={"/"} className="bg-green-500">
        <button>Go to home page</button>
      </Link>
    </div>
  );
};

export default NotFound;
