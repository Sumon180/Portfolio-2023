import React from "react";

const Transaction = () => {
  return (
    <div className="grid mt-20 px-4 py-24 sm:px-6 lg:px-8 place-items-center border">
      <div className="relative w-full max-w-md bg-slate-800 mx-auto overflow-hidden  rounded-xl">
        <div className="absolute top-0 right-0 pt-3 pr-3">
          <button
            type="button"
            className="p-1 text-gray-400 transition-all duration-200 bg-slate-900 rounded-md hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
          >
            <span className="sr-only">Close</span>
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        <div className="p-8">
          <div className="text-center">
            <svg
              className="w-10 h-10 mx-auto  animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>

            <p className="mt-8 text-xl font-bold ">Transaction in Progress</p>
            <p className="mt-3 text-base font-medium text-gray-400">
              This can take a few minutes depending on gas. Don’t leave this
              page. You can do whatever you want.
            </p>
            <div className="mt-8">
              <button
                type="button"
                className="inline-flex items-center justify-center w-full px-6 py-4 text-xs font-bold tracking-widest  uppercase transition-all duration-200 bg-transparent border border-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 hover:text-white"
              >
                View Status
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
