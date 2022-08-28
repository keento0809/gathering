import React from "react";
import Meta from "../meta/Meta";
import Nav from "../components/nav/Nav";
import Navbar from "../components/nav/Navbar";
import { LayoutProps } from "../models/model";

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Meta />
      <Navbar />
      <div className="container">
        <section
          className={`fixed top-0 left-0 container-wrapper w-full h-96 rounded-b-xl bg-common bg-cover bg-center flex justify-center items-center`}
        >
          {children}
        </section>
      </div>
    </>
  );
};

export default Layout;
