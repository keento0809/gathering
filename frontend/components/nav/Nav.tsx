import React from "react";
import Link from "next/link";

const Nav = () => {
  const handleOpenMenu = () => {
    console.log("aaaa");
  };

  return (
    <header className="fixed top-0 left-0 w-full z-10">
      <div className="header-container px-5 py-4 flex flex-row justify-between items-center">
        <section className="header-left">
          <Link href="/">
            <span className="text-red-500 font-bold">Gathering</span>
          </Link>
        </section>
        <section className="header-right" onClick={handleOpenMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="red"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </section>
      </div>
    </header>
  );
};

export default Nav;
