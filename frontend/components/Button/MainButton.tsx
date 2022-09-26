import React, { Fragment } from "react";
import Link from "next/link";
import { MainButtonProps } from "../../models/model";

const MainButton = ({ text, linkUrl, isMaximum }: MainButtonProps) => {
  return (
    <Fragment>
      <button
        className={`relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 ${
          isMaximum && "opacity-40"
        }`}
        disabled={isMaximum}
      >
        {!isMaximum && (
          <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            <Link href={linkUrl}>{text}</Link>
          </span>
        )}
        {isMaximum && (
          <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            {text}
          </span>
        )}
      </button>
    </Fragment>
  );
};

export default MainButton;
