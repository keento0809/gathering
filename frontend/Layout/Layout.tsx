import React, { useEffect, useState } from "react";
import Meta from "../meta/Meta";
import Nav from "../components/navbar/NavBar";
import { LayoutProps } from "../models/model";
import Footer from "../components/Footer/Footer";
import { useRouter } from "next/router";
import LoadingSpinner from "../components/Spinner/LoadingSpinner";
import { useLoadingContext } from "../context/LoadingContext";

const Layout = ({ children }: LayoutProps) => {
  const [styling, setStyling] = useState({});
  const { isLoading } = useLoadingContext();
  const router = useRouter();
  useEffect(() => {
    setStyling(
      router.route === "/" ? {} : { backgroundColor: `rgb(254 202 202)` }
    );
  }, []);
  return (
    <>
      <Meta />
      <Nav />
      <div className="container">
        <section
          // add condition
          style={{ backgroundColor: `rgb(254 202 202)` }}
          className={`fixed top-0 left-0 container-wrapper w-full h-96 rounded-b-xl bg-cover bg-center flex justify-center items-center`}
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
