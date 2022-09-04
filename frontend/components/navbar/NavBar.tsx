import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import NavMenu from "../NavMenu/NavMenu";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { query } = useRouter();

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [query]);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-10">
        <div className="header-container px-5 py-4 flex flex-row justify-between items-center">
          <section className="header-left">
            <Link href="/home">
              <span className="text-red-500 font-bold tracking-tight">
                Gathering
              </span>
            </Link>
          </section>
          <section className="header-right" onClick={handleToggleMenu}>
            {!isMenuOpen && (
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
            )}
            {isMenuOpen && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="red"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </section>
        </div>
      </header>
      {isMenuOpen && <NavMenu />}
    </>
  );
};

export default NavBar;
