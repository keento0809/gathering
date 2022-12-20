import React, { useEffect, useState } from "react";
import Meta from "../meta/Meta";
import Nav from "../components/navbar/NavBar";
import { LayoutProps } from "../models/model";
import Footer from "../components/Footer/Footer";
import { useRouter } from "next/router";
import LoadingSpinner from "../components/Spinner/LoadingSpinner";
import { useLoadingContext } from "../context/LoadingContext";
import bgImgUrl from "../public/static/bgImage.jpg";

const Layout = ({ children }: LayoutProps) => {
  const [isHero, setIsHero] = useState(false);
  const { isLoading } = useLoadingContext();
  const router = useRouter();
  useEffect(() => {
    console.log(router.route === "/");
    setIsHero(router.route === "/");
  }, [router.route]);
  return (
    <>
      <Meta />
      <Nav />
      <div className="containers">
        <section
          className={`container-wrapper bg-secondary w-full rounded-b-xl flex ${
            isHero && "items-center"
          }`}
          style={{ minHeight: "100svh" }}
        >
          {children}
        </section>
      </div>
      <Footer />
      {isLoading && <LoadingSpinner />}
    </>
  );
};

export default Layout;
