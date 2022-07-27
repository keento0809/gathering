import React from "react";

const GatheringCard = () => {
  return (
    <li>
      <div className="relative p-4 w-180 h-180 bg-red-500 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <h3 className="text-lg font-bold">MokuMoku Kai</h3>
        <p className="text-sm font-normal">
          test test test test test test test test test test test test test test
          test
        </p>
        <div className="absolute bottom-5 right-6">
          <svg
            aria-hidden="true"
            className="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
    </li>
  );
};

export default GatheringCard;
