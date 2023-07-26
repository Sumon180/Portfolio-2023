import React from "react";

const RegisteredForm = () => {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 border my-16">
      <div className="absolute inset-0">
        <img
          className="object-cover w-full h-full opacity-40"
          src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/sign-up/3/background.png"
          alt=""
        />
      </div>

      <div className="relative px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2 gap-x-16">
          <div>
            <h2 className="tracking-tighter text-white">
              <span className="font-sans text-4xl font-normal sm:text-5xl md:text-6xl">
                {" "}
                The road to{" "}
              </span>
              <span className="font-serif text-5xl italic sm:text-6xl sm:block md:text-7xl">
                {" "}
                the perfect loaf{" "}
              </span>
              <span className="font-sans text-4xl font-normal sm:text-5xl md:text-6xl">
                {" "}
                starts here.{" "}
              </span>
            </h2>
            <p className="mt-8 font-sans text-lg text-opacity-50 text-white">
              Vulputate nunc purus, porttitor ornare diam aliquam. Gravida
              fringilla non morbi commodo ut lectus. Venenatis nunc mauris
              viverra posuere. Morbi pulvinar lectus dignissim et vitae mattis
              ac.
            </p>

            <div className="flex mt-8 space-x-3">
              <a href="#" title="" className="" role="button">
                <img
                  className="w-auto h-12"
                  src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/sign-up/3/appstore.png"
                  alt=""
                />
              </a>

              <a href="#" title="" className="" role="button">
                <img
                  className="w-auto h-12"
                  src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/sign-up/3/googlestore.png"
                  alt=""
                />
              </a>
            </div>

            <div className="flex items-center mt-12 space-x-6 sm:space-x-12 lg:mt-16">
              <div>
                <img
                  className="object-contain w-auto h-8 opacity-70"
                  src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/sign-up/3/logo-kyan.png"
                  alt=""
                />
              </div>

              <div>
                <img
                  className="object-contain w-auto h-8 opacity-70"
                  src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/sign-up/3/logo-treva.png"
                  alt=""
                />
              </div>

              <div>
                <img
                  className="object-contain w-auto h-8 opacity-70"
                  src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/sign-up/3/logo-utosia.png"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-dark-gray">
            <div className="px-6 py-8 sm:px-8 sm:py-10">
              <div className="flex items-center justify-between">
                <h3 className="font-sans text-2xl font-normal text-white">
                  Register now!
                </h3>

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
                    <label htmlFor="" className="sr-only">
                      {" "}
                      Username{" "}
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                          className="w-6 h-6 text-white"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 12C9.79086 12 8 10.2091 8 8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8C16 10.2091 14.2091 12 12 12ZM12 14C14.67 14 20 15.34 20 18V19C20 19.55 19.55 20 19 20H5C4.45 20 4 19.55 4 19V18C4 15.34 9.33 14 12 14Z"
                          />
                        </svg>
                      </div>

                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Username"
                        className="block w-full py-3 pl-12 pr-4 font-sans text-base font-normal text-white placeholder-primary placeholder-opacity-50 border rounded-lg border-neutral focus:outline-none focus:ring-primary focus:border-primary "
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="" className="sr-only">
                      {" "}
                      Email address{" "}
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                          className="w-6 h-6 text-white"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM19.6 8.25L12.53 12.67C12.21 12.87 11.79 12.87 11.47 12.67L4.4 8.25C4.15 8.09 4 7.82 4 7.53C4 6.86 4.73 6.46 5.3 6.81L12 11L18.7 6.81C19.27 6.46 20 6.86 20 7.53C20 7.82 19.85 8.09 19.6 8.25Z"
                          />
                        </svg>
                      </div>

                      <input
                        type="email"
                        name=""
                        id=""
                        placeholder="Email"
                        className="block w-full py-3 pl-12 pr-4 font-sans text-base font-normal text-white placeholder-primary placeholder-opacity-50 border rounded-lg border-neutral focus:outline-none focus:ring-primary focus:border-primary "
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="" className="sr-only">
                      {" "}
                      Password{" "}
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                          className="w-6 h-6 text-white"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17ZM9 8V6C9 4.34 10.34 3 12 3C13.66 3 15 4.34 15 6V8H9Z"
                          />
                        </svg>
                      </div>

                      <input
                        type="password"
                        name=""
                        id=""
                        placeholder="Password"
                        className="block w-full py-3 pl-12 pr-4 font-sans text-base font-normal text-white placeholder-primary placeholder-opacity-50 border rounded-lg border-neutral focus:outline-none focus:ring-primary focus:border-primary "
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="" className="sr-only">
                      {" "}
                      Confirm password{" "}
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                          className="w-6 h-6 text-white"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
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
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        className="w-4 h-4 bg-transparent border-2 rounded border-primary text-black focus:border-primary focus:ring-primary"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor=""
                        className="font-sans text-base font-normal text-opacity-50 text-white"
                      >
                        {" "}
                        By creating an account, you agree to the Terms and
                        Conditions and Privacy Policy{" "}
                      </label>
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
                    sm:py-2 sm:leading-8 bg-white
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
  );
};

export default RegisteredForm;
