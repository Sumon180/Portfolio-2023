import React from "react";

const Modal2 = () => {
  return (
    <div className="h-96  mt-20 border w-full">
      <div className="flex items-center justify-center w-full h-full px-4 py-5 sm:p-6">
        <div className="w-full max-w-sm  shadow-lg rounded-xl">
          <div className="px-4 py-5 sm:p-6">
            <div className="text-center">
              <svg
                className="w-16 h-16 mx-auto "
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <p className="mt-5 text-xl font-bold ">
                Task created successfully
              </p>
              <p className="mt-3 text-sm font-medium text-gray-500">
                Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
              </p>
              <div className="mt-8">
                <button
                  type="button"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold leading-5 text-indigo-600 transition-all duration-200 bg-indigo-100 border border-transparent rounded-md hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-600"
                >
                  Ok, Thanks!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal2;
