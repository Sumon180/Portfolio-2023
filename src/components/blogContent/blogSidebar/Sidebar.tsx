import React from "react";

const Sidebar = () => {
  return (
    <section className="py-12 mt-20 sm:py-16 lg:py-20 border">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-6 lg:gap-x-12 xl:gap-x-20">
          <div className=" lg:col-span-4 rounded-xl">
            <div className="px-4 py-5 sm:p-6 h-96"></div>
          </div>

          <div className="lg:col-span-2">
            <p className="text-2xl font-bold ">Popular Posts</p>

            <div className="mt-8 space-y-12">
              <div className="group">
                <a
                  href="#"
                  title=""
                  className="block overflow-hidden aspect-w-16 aspect-h-9 rounded-xl"
                >
                  <img
                    className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
                    src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/sidebar-popular-posts/1/thumbnail-1.png"
                    alt=""
                  />
                </a>
                <p className="mt-6 text-xl font-bold  group-hover:text-gray-600">
                  <a href="#" title="" className="">
                    How to write content about your photographs
                  </a>
                </p>
                <div className="flex items-center mt-4 space-x-2">
                  <p className="text-sm font-medium ">
                    <a href="#" title="" className="">
                      Growth
                    </a>
                  </p>
                  <span className="text-sm font-medium ">•</span>
                  <p className="text-sm font-medium ">April 09, 2022</p>
                </div>
              </div>

              <div className="group">
                <a
                  href="#"
                  title=""
                  className="block overflow-hidden aspect-w-16 aspect-h-9 rounded-xl"
                >
                  <img
                    className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
                    src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/sidebar-popular-posts/1/thumbnail-2.png"
                    alt=""
                  />
                </a>
                <p className="mt-6 text-xl font-bold  group-hover:text-gray-600">
                  <a href="#" title="" className="">
                    How to write content about your photographs
                  </a>
                </p>
                <div className="flex items-center mt-4 space-x-2">
                  <p className="text-sm font-medium ">
                    <a href="#" title="" className="">
                      Growth
                    </a>
                  </p>
                  <span className="text-sm font-medium ">•</span>
                  <p className="text-sm font-medium ">April 09, 2022</p>
                </div>
              </div>

              <div className="group">
                <a
                  href="#"
                  title=""
                  className="block overflow-hidden aspect-w-16 aspect-h-9 rounded-xl"
                >
                  <img
                    className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
                    src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/sidebar-popular-posts/1/thumbnail-3.png"
                    alt=""
                  />
                </a>
                <p className="mt-6 text-xl font-bold  group-hover:text-gray-600">
                  <a href="#" title="" className="">
                    How to write content about your photographs
                  </a>
                </p>
                <div className="flex items-center mt-4 space-x-2">
                  <p className="text-sm font-medium ">
                    <a href="#" title="" className="">
                      Growth
                    </a>
                  </p>
                  <span className="text-sm font-medium ">•</span>
                  <p className="text-sm font-medium ">April 09, 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
