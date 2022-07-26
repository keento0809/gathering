import React from "react";
import Nav from "../nav/Nav";
import { LayoutProps } from "../../models/model";

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Nav />
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
