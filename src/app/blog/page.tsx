"use client";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Counter from "@/components/Counter";
import ScrollAnimation from "@/components/ScrollAnimation";
import DragDrop from "@/components/Drag&Drop";
import { motion } from "framer-motion";
import Link from "next/link";
import { FC } from "react";
import Style from "./page.module.css";
import NewsLetter2 from "@/components/blogContent/NewsLetter";
import Products3 from "@/components/blogContent/Products";
import Team8 from "@/components/blogContent/Team";
import BlogGrid from "@/components/blogContent/BlogGrid";
import Content from "@/components/blogContent/Content";
import Content2 from "@/components/blogContent/Content2";
import Content3 from "@/components/blogContent/Content3";
import BlogHeader from "@/components/navbar/BlogHeader";
import Article2 from "@/components/blogContent/Article";
import LogoCloud from "@/components/blogContent/LogoCloud";
import Modal2 from "@/components/blogContent/Modal";
import Program5 from "@/components/blogContent/Program";
import Transaction from "@/components/blogContent/TransactionProgress";
import Sidebar from "@/components/blogContent/blogSidebar/Sidebar";
import RegisteredForm from "@/components/blogContent/RegisteredForm";
import RegisteredForm2 from "@/components/blogContent/RegisteredForm2";

const Blog: FC = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="my-28 mx-auto">
          <BlogHeader />
          <Content3 />
          <div className={`${Style.blog} mt-10`}>
            <h2 className="mb-10 text-center">State change by Redux</h2>
            <div className="flex flex-col items-center justify-center">
              <Button />
              <Counter />
            </div>
            <div>
              <DragDrop />
              <Card />
              <Link href={"/blog/aos"}>
                <button className=" bg-rose-500">See scroll Animation</button>
              </Link>
              <section className=" my-16">
                <div className="relative inline-flex items-center justify-center mt-8 sm:mt-12 group">
                  <div className="absolute transition-all duration-200 rounded-md -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                  <a
                    href="#"
                    title=""
                    className="relative inline-flex items-center justify-center px-8 py-3 text-base font-normal text-white  border border-transparent rounded-md"
                    role="button"
                  >
                    Join our team
                  </a>
                </div>
              </section>
              <RegisteredForm2 />
              <RegisteredForm />
              <section>
                <NewsLetter2 />
                <Products3 />
                <Team8 />
                <BlogGrid />
                <Content />
                <Content2 />

                <Article2 />
                <LogoCloud />
                <Modal2 />
                <Program5 />
                <Transaction />
                <Sidebar />
              </section>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Blog;
