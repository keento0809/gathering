import React from "react";
import { ChildrenProps } from "../../models/model";

const Wrapper = ({ children }: ChildrenProps) => {
  return (
    <div className="w-full px-5 pt-24">{children}</div>
    // <div className="fixed top-28 left-0 w-full md:top-24 px-5">{children}</div>
  );
};

export default Wrapper;
