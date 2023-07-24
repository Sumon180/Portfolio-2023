import React from "react";

const Program5 = () => {
  return (
    <section className="py-12 mt-20 sm:py-16 lg:py-20 border">
      <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12">
          <div className="flex flex-col self-stretch justify-between">
            <div className="flex-1">
              <h2 className="tracking-tighter ">
                <span className="font-sans text-4xl font-normal sm:text-5xl md:text-6xl">
                  {" "}
                  A private, community{" "}
                </span>
                <span className="font-serif text-5xl italic sm:text-6xl sm:block md:text-7xl">
                  {" "}
                  focused masterclassName{" "}
                </span>
              </h2>
              <p className="mt-6 font-sans text-lg font-normal text-opacity-50 text-white">
                Nullam et mi leo dolor ornare odio. Urna pharetra venenatis duis
                ultrices aliquam. Porta porttitor non laoreet nisi augue
                porttitor non.
              </p>
              <div className="mt-8">
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
                              font-semibold
                              transition-all
                              duration-200
                              border-2 border-transparent
                              rounded-full
                              sm:leading-8
                              
                              sm:text-lg
                              
                              hover:bg-opacity-90
                              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-secondary
                          "
                  role="button"
                >
                  Read More
                </a>
              </div>
            </div>

            <div className="relative max-w-md mt-8 overflow-hidden rounded-lg group lg:mt-auto">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  className="object-cover w-full h-full transition-all duration-300 transform opacity-70 group-hover:scale-125"
                  src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/programs/3/program-big.png"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent"></div>
              <div className="absolute left-4 bottom-4">
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
                              font-semibold
                              transition-all
                              duration-200
                              bg-transparent
                              border-2
                              rounded-full
                              
                              border-primary
                              hover:bg-white
                              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
                              hover:text-black
                              focus:ring-offset-secondary
                          "
                  role="button"
                >
                  <svg
                    className="w-6 h-6 mr-2"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.0416 4.9192C7.37507 4.51928 6.5271 4.99939 6.5271 5.77669L6.5271 18.2232C6.5271 19.0005 7.37507 19.4806 8.0416 19.0807L18.4137 12.8574C19.061 12.469 19.061 11.5308 18.4137 11.1424L8.0416 4.9192Z"
                    ></path>
                  </svg>
                  Watch trailer
                </a>
              </div>
            </div>
          </div>

          <div className="lg:pl-16">
            <div className="overflow-hidden border divide-y rounded-lg border-neutral divide-neutral">
              <div className="px-8 py-10 transition-all duration-200 hover:bg-dark-gray">
                <h3 className="font-sans text-sm font-semibold uppercase ">
                  INTRODUCTION
                </h3>
                <p className="mt-2 font-serif text-3xl italic ">
                  Week 1 - Week 2
                </p>
                <p className="mt-4 font-sans text-base font-normal text-opacity-50 ">
                  Etiam orci, tellus vestibulum sem in viverra quisque. Mi massa
                  mauris amet lorem fusce. Iaculis id viverra ut semper mattis
                  pellentesque.
                </p>
              </div>

              <div className="px-8 py-10 transition-all duration-200 hover:bg-dark-gray">
                <h3 className="font-sans text-sm font-semibold uppercase ">
                  LOREM IPSUM
                </h3>
                <p className="mt-2 font-serif text-3xl italic ">
                  Week 3 - Week 8
                </p>
                <p className="mt-4 font-sans text-base font-normal text-opacity-50 border">
                  Etiam orci, tellus vestibulum sem in viverra quisque. Mi massa
                  mauris amet lorem fusce. Iaculis id viverra ut semper mattis
                  pellentesque.
                </p>
              </div>

              <div className="px-8 py-10 transition-all duration-200 hover:bg-dark-gray">
                <h3 className="font-sans text-sm font-semibold uppercase text-white">
                  CONCLUSION
                </h3>
                <p className="mt-2 font-serif text-3xl italic text-white">
                  Week 8 - Week 10
                </p>
                <p className="mt-4 font-sans text-base font-normal text-opacity-50 text-white">
                  Etiam orci, tellus vestibulum sem in viverra quisque. Mi massa
                  mauris amet lorem fusce. Iaculis id viverra ut semper mattis
                  pellentesque.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program5;
