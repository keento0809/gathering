import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import NavMenu from "../NavMenu/NavMenu";
import { GetServerSideProps } from "next";
import { getSession, useSession, signOut } from "next-auth/react";
import { useLoadingContext } from "../../context/LoadingContext";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session } = useSession();
  const { query } = useRouter();
  const router = useRouter();
  const { setIsLoading } = useLoadingContext();

  const NAV_TAB_STYLE = `px-6 text-sm tracking-tighter transition-transform hover:scale-105 hover:text-primary cursor-pointer`;

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handlePageTransition = (linkUrl: string) => {
    if (router.asPath === linkUrl) return;
    setIsLoading(true);
    router.push(linkUrl);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [query]);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-40 bg-secondary border-b-0.8 border-textPrimary">
        <div className="header-container px-5 py-4 flex flex-row justify-between items-center">
          <section className="header-left">
            <div onClick={() => handlePageTransition("/home")}>
              <span className="text-primary font-bold lg:pl-6 tracking-tight lg:text-lg cursor-pointer">
                Gathering
              </span>
            </div>
          </section>
          <section
            className="header-right-mobile lg:hidden"
            onClick={handleToggleMenu}
          >
            {!isMenuOpen && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 cursor-pointer"
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
          <section className="header-right-desktop hidden lg:block">
            <ul className="flex flex-row">
              <li
                className={NAV_TAB_STYLE}
                onClick={() => handlePageTransition("/about")}
              >
                About
              </li>
              <li
                className={NAV_TAB_STYLE}
                onClick={() => handlePageTransition("/search")}
              >
                Find Gathering
              </li>
              {router.route === `/admin/home` && session !== null && (
                <li
                  className={NAV_TAB_STYLE}
                  onClick={(e) => {
                    e.preventDefault();
                    signOut();
                  }}
                >
                  Sign out
                </li>
              )}
              {!(router.route === `/admin/home` && session !== null) && (
                <li
                  className={NAV_TAB_STYLE}
                  onClick={() => handlePageTransition("/admin/home")}
                >
                  {session ? "Organizer Page" : "Login for Organizer"}
                </li>
              )}
              <hr />
            </ul>
          </section>
        </div>
      </header>
      {isMenuOpen && <NavMenu />}
    </>
  );
};

export default NavBar;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
};
