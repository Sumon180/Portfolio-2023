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

const Blog: FC = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="my-40  w-3/4 mx-auto">
        <h2 className="text-center mb-20 text-5xl underline">My blog</h2>
          <div className={`${Style.blog}`}>
            <h1 className="mb-10 text-center">State change by Redux</h1>
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
              <div className="relative inline-flex items-center justify-center mt-8 sm:mt-12 group">
                      <div
                          className="absolute transition-all duration-200 rounded-md -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50">
                      </div>
                      <a href="#" title=""
                          className="relative inline-flex items-center justify-center px-8 py-3 text-base font-normal text-white bg-black border border-transparent rounded-md"
                          role="button">
                          Join our team
                      </a>
                  </div>
                  <section>
      <div className="min-h-full lg:flex lg:justify-between">
        <div className="flex flex-col justify-center flex-1 px-4 py-12 bg-white sm:px-6 lg:px-20 xl:px-24">
          <div className="flex-1 max-w-sm mx-auto lg:max-w-md">
            <img
              className="w-auto h-8 mx-auto lg:mx-0"
              src="https://cdn.rareblocks.xyz/collection/clarity/images/logo.svg"
              alt=""
            />

            <h1 className="mt-10 text-3xl font-bold text-center text-gray-900 lg:mt-20 xl:mt-32 sm:text-4xl xl:text-5xl font-pj lg:text-left">
              Get started your 14 days free trial now
            </h1>

            <form action="#" method="POST" className="mt-10">
              <div className="space-y-4">
                <div>
                  <label htmlFor="" className="sr-only">
                    {" "}
                    Email{" "}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>

                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Username"
                      className="
                                      block
                                      w-full
                                      py-4
                                      pl-12
                                      pr-4
                                      overflow-hidden
                                      text-base
                                      font-normal
                                      text-gray-900
                                      placeholder-gray-600
                                      transition-all
                                      duration-200
                                      border border-gray-300
                                      caret-gray-900
                                      rounded-xl
                                      bg-gray-50
                                      focus:outline-none focus:bg-white focus:border-gray-900 focus:ring-gray-900
                                      font-pj
                                  "
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="" className="sr-only">
                    {" "}
                    Password{" "}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    </div>

                    <input
                      type="password"
                      name=""
                      id=""
                      placeholder="Password (min. 8 characters)"
                      className="
                                      block
                                      w-full
                                      py-4
                                      pl-12
                                      pr-4
                                      overflow-hidden
                                      text-base
                                      font-normal
                                      text-gray-900
                                      placeholder-gray-600
                                      transition-all
                                      duration-200
                                      border border-gray-300
                                      caret-gray-900
                                      rounded-xl
                                      bg-gray-50
                                      focus:outline-none focus:bg-white focus:border-gray-900 focus:ring-gray-900
                                      font-pj
                                  "
                    />
                  </div>
                </div>
              </div>

              <div className="relative flex items-center mt-5">
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    name="terms"
                    id="terms"
                    className="w-5 h-5 text-gray-900 border-gray-300 rounded focus:ring-gray-900"
                  />
                </div>

                <div className="ml-3 text-base">
                  <label
                    htmlFor="terms"
                    className="font-normal text-gray-900 font-pj"
                  >
                    {" "}
                    I agree with{" "}
                    <a
                      href="#"
                      title=""
                      className="font-bold rounded focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 hover:underline"
                    >
                      Terms & Conditions
                    </a>{" "}
                  </label>
                </div>
              </div>

              <div className="relative mt-8">
                <div className="absolute -inset-2">
                  <div
                    className="w-full h-full mx-auto opacity-30 blur-lg filter"
                    style={{
                      background:
                        "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
                    }}
                  ></div>
                </div>

                <button
                  type="submit"
                  className="relative flex items-center justify-center w-full px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 font-pj hover:bg-gray-600"
                >
                  Join Rareblocks
                </button>
              </div>
            </form>

            <p className="mt-10 text-base font-normal text-center text-gray-900 lg:mt-20 xl:mt-32 font-pj lg:text-left">
              Already have an account?{" "}
              <a
                href="#"
                title=""
                className="font-bold rounded focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 hover:underline"
              >
                Login now
              </a>
            </p>
          </div>
        </div>

        <div className="relative grid flex-1 w-full px-4 py-12 overflow-hidden bg-gray-900 lg:max-w-2xl lg:px-20 xl:px-24 sm:px-6 place-items-center">
          <div className="absolute inset-0">
            <img
              className="object-cover object-top w-full h-full scale-150 -rotate-90 opacity-10"
              src="https://cdn.rareblocks.xyz/collection/clarity/images/sign-up/4/background-pattern.png"
              alt=""
            />
          </div>

          <div className="relative max-w-sm mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-800 rounded-xl">
              <svg
                className="w-auto h-5 text-white"
                viewBox="0 0 33 23"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M32.0011 4.7203L30.9745 0C23.5828 0.33861 18.459 3.41404 18.459 12.4583V22.8687H31.3725V9.78438H26.4818C26.4819 6.88236 28.3027 5.17551 32.0011 4.7203Z" />
                <path d="M13.5421 4.7203L12.5155 0C5.12386 0.33861 0 3.41413 0 12.4584V22.8687H12.914V9.78438H8.02029C8.02029 6.88236 9.84111 5.17551 13.5421 4.7203Z" />
              </svg>
            </div>

            <blockquote className="mt-14">
              <p className="text-2xl font-medium leading-relaxed text-white lg:text-3xl font-pj">
                “You made it so simple. My new site is so much faster and easier
                to work with than my old site. I just choose the page, make the
                change.”
              </p>
            </blockquote>

            <div className="flex items-center mt-12">
              <img
                className="flex-shrink-0 object-cover rounded-full w-14 h-14"
                src="https://cdn.rareblocks.xyz/collection/clarity/images/sign-up/4/avatar-female.png"
                alt=""
              />
              <div className="ml-4">
                <p className="text-xl font-bold text-white font-pj">
                  Leslie Alexander
                </p>
                <p className="mt-px text-lg font-normal text-gray-400 font-pj">
                  React Developer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="relative py-12 sm:py-16 lg:py-20 bg-black">
  <div className="absolute inset-0">
      <img className="object-cover w-full h-full opacity-40" src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/sign-up/3/background.png" alt="" />
  </div>

  <div className="relative px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
      <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2 gap-x-16">
          <div>
              <h2 className="tracking-tighter text-white">
                  <span className="font-sans text-4xl font-normal sm:text-5xl md:text-6xl"> The road to </span>
                  <span className="font-serif text-5xl italic sm:text-6xl sm:block md:text-7xl"> the perfect loaf </span>
                  <span className="font-sans text-4xl font-normal sm:text-5xl md:text-6xl"> starts here. </span>
              </h2>
              <p className="mt-8 font-sans text-lg text-opacity-50 text-white">Vulputate nunc purus, porttitor ornare diam aliquam. Gravida fringilla non morbi commodo ut lectus. Venenatis nunc mauris viverra posuere. Morbi pulvinar lectus dignissim et vitae mattis ac.</p>

              <div className="flex mt-8 space-x-3">
                  <a href="#" title="" className="" role="button">
                      <img className="w-auto h-12" src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/sign-up/3/appstore.png" alt="" />
                  </a>

                  <a href="#" title="" className="" role="button">
                      <img className="w-auto h-12" src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/sign-up/3/googlestore.png" alt="" />
                  </a>
              </div>

              <div className="flex items-center mt-12 space-x-6 sm:space-x-12 lg:mt-16">
                  <div>
                      <img className="object-contain w-auto h-8 opacity-70" src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/sign-up/3/logo-kyan.png" alt="" />
                  </div>

                  <div>
                      <img className="object-contain w-auto h-8 opacity-70" src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/sign-up/3/logo-treva.png" alt="" />
                  </div>

                  <div>
                      <img className="object-contain w-auto h-8 opacity-70" src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/sign-up/3/logo-utosia.png" alt="" />
                  </div>
              </div>
          </div>

          <div className="rounded-lg bg-dark-gray">
              <div className="px-6 py-8 sm:px-8 sm:py-10">
                  <div className="flex items-center justify-between">
                      <h3 className="font-sans text-2xl font-normal text-white">Register now!</h3>

                      <a
                          href="#"
                          title=""
                          className="
                              inline-flex
                              items-center
                              justify-center
                              px-5
                              py-2
                              font-sans
                              text-base
                              font-normal
                              leading-7
                              transition-all
                              duration-200
                              border-2
                              rounded-full
                              text-white
                              border-primary
                              focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary
                              hover:bg-white hover:text-black
                              focus:ring-offset-secondary
                          "
                          role="button"
                      >
                          Login
                      </a>
                  </div>

                  <form action="#" method="POST" className="mt-8">
                      <div className="grid gap-4 sm:grid-cols-2">
                          <div className="sm:col-span-2">
                              <label htmlFor="" className="sr-only"> Username </label>
                              <div className="relative">
                                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                          <path
                                              fill-rule="evenodd"
                                              clip-rule="evenodd"
                                              d="M12 12C9.79086 12 8 10.2091 8 8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8C16 10.2091 14.2091 12 12 12ZM12 14C14.67 14 20 15.34 20 18V19C20 19.55 19.55 20 19 20H5C4.45 20 4 19.55 4 19V18C4 15.34 9.33 14 12 14Z"
                                          />
                                      </svg>
                                  </div>

                                  <input
                                      type="text"
                                      name=""
                                      id=""
                                      placeholder="Username"
                                      className="block w-full py-3 pl-12 pr-4 font-sans text-base font-normal text-white placeholder-primary placeholder-opacity-50 border rounded-lg border-neutral focus:outline-none focus:ring-primary focus:border-primary bg-black"
                                  />
                              </div>
                          </div>

                          <div className="sm:col-span-2">
                              <label htmlFor="" className="sr-only"> Email address </label>
                              <div className="relative">
                                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                          <path
                                              fill-rule="evenodd"
                                              clip-rule="evenodd"
                                              d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM19.6 8.25L12.53 12.67C12.21 12.87 11.79 12.87 11.47 12.67L4.4 8.25C4.15 8.09 4 7.82 4 7.53C4 6.86 4.73 6.46 5.3 6.81L12 11L18.7 6.81C19.27 6.46 20 6.86 20 7.53C20 7.82 19.85 8.09 19.6 8.25Z"
                                          />
                                      </svg>
                                  </div>

                                  <input
                                      type="email"
                                      name=""
                                      id=""
                                      placeholder="Email"
                                      className="block w-full py-3 pl-12 pr-4 font-sans text-base font-normal text-white placeholder-primary placeholder-opacity-50 border rounded-lg border-neutral focus:outline-none focus:ring-primary focus:border-primary bg-black"
                                  />
                              </div>
                          </div>

                          <div>
                              <label htmlFor="" className="sr-only"> Password </label>
                              <div className="relative">
                                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                          <path
                                              fill-rule="evenodd"
                                              clip-rule="evenodd"
                                              d="M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17ZM9 8V6C9 4.34 10.34 3 12 3C13.66 3 15 4.34 15 6V8H9Z"
                                          />
                                      </svg>
                                  </div>

                                  <input
                                      type="password"
                                      name=""
                                      id=""
                                      placeholder="Password"
                                      className="block w-full py-3 pl-12 pr-4 font-sans text-base font-normal text-white placeholder-primary placeholder-opacity-50 border rounded-lg border-neutral focus:outline-none focus:ring-primary focus:border-primary bg-black"
                                  />
                              </div>
                          </div>

                          <div>
                              <label htmlFor="" className="sr-only"> Confirm password </label>
                              <div className="relative">
                                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                          <path
                                              fill-rule="evenodd"
                                              clip-rule="evenodd"
                                              d="M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17ZM9 8V6C9 4.34 10.34 3 12 3C13.66 3 15 4.34 15 6V8H9Z"
                                          />
                                      </svg>
                                  </div>

                                  <input
                                      type="password"
                                      name=""
                                      id=""
                                      placeholder="Confirm"
                                      className="block w-full py-3 pl-12 pr-4 font-sans text-base font-normal text-white placeholder-primary placeholder-opacity-50 border rounded-lg border-neutral focus:outline-none focus:ring-primary focus:border-primary bg-black"
                                  />
                              </div>
                          </div>
                      </div>

                      <div className="mt-6">
                          <div className="relative flex items-start">
                              <div className="flex items-center h-5">
                                  <input type="checkbox" name="" id="" className="w-4 h-4 bg-transparent border-2 rounded border-primary text-black focus:border-primary focus:ring-primary" />
                              </div>
                              <div className="ml-3 text-sm">
                                  <label htmlFor="" className="font-sans text-base font-normal text-opacity-50 text-white"> By creating an account, you agree to the Terms and Conditions and Privacy Policy </label>
                              </div>
                          </div>
                      </div>

                      <div className="mt-6">
                          <button
                              type="submit"
                              className="
                                  inline-flex
                                  items-center
                                  justify-center
                                  w-full
                                  px-5
                                  py-3
                                  font-sans
                                  text-base
                                  font-semibold
                                  transition-all
                                  duration-200
                                  border-2 border-transparent
                                  rounded-full
                                  sm:py-2 sm:leading-8
                                  bg-white
                                  sm:text-lg
                                  text-black
                                  hover:bg-opacity-90
                                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-secondary
                              "
                          >
                              Create an account
                          </button>
                      </div>
                  </form>
              </div>
          </div>
      </div>
  </div>
</section>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Blog;
