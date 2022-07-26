import React, { ReactElement } from "react";
import { LayoutProps } from "../../models/model";

const Container = ({ children }: LayoutProps) => {
  return (
    <div className="container">
      <section
        className={`fixed top-0 left-0 container-wrapper w-full h-96 rounded-b-xl bg-common bg-cover bg-center flex justify-center items-center`}
      >
        <div className="fixed top-96 left-0 w-full px-5">{children}</div>
      </section>
    </div>
  );
};

export default Container;
