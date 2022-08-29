import React from "react";
import { ChildrenProps } from "../../models/model";

const Wrapper = ({ children }: ChildrenProps) => {
  return <div className="fixed top-28 left-0 w-full px-5">{children}</div>;
};

export default Wrapper;