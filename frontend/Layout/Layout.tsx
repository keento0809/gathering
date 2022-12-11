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
      <div className="containers">
        <section
          style={{ backgroundColor: `rgb(254 202 202)`, minHeight: "100svh" }}
          className={`container-wrapper w-full rounded-b-xl bg-cover bg-center`}
          // className={`container-wrapper w-full rounded-b-xl bg-cover bg-center flex justify-start items-start`}
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
