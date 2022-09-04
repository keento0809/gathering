import React from "react";
import Meta from "../meta/Meta";
import Nav from "../components/navbar/NavBar";
import { LayoutProps } from "../models/model";
import Footer from "../components/Footer/Footer";

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Meta />
      <Nav />
      <div className="container">
        <section
          style={{ backgroundColor: "rgb(254 202 202)" }}
          className={`bg-red-200 fixed top-0 left-0 container-wrapper w-full h-96 rounded-b-xl bg-cover bg-center flex justify-center items-center`}
        >
          {children}
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
