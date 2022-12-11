import React from "react";

const Footer = () => {
  return (
    <>
      {/* <footer className="fixed bottom-0 w-full text-center px-4 pb-4 bg-white rounded-lg shadow dark:bg-gray-900"> */}
      <footer className="w-full text-center px-4 pb-4 bg-white rounded-lg shadow dark:bg-gray-900">
        <hr className="mb-4 border-gray-200 sm:mx-auto dark:border-gray-700" />
        <span className="block text-xs text-gray-500 sm:text-center dark:text-gray-400">
          © 2022 <span className="hover:underline">KENTO HONDA</span>. All
          Rights Reserved.
        </span>
      </footer>
    </>
  );
};

export default Footer;
