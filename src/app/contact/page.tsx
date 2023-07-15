"use client";
import Form from "@/components/Form";
import { motion } from "framer-motion";
import Link from "next/link";

const Contact = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="my-40  w-3/4 mx-auto">
          <div className="flex flex-col items-center justify-center">
            <h1 className="max-md:mt-36 mb-3">Contact Us</h1>
            <Form />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;
