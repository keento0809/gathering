import React from "react";
import { ChildrenProps } from "../../models/model";

const Card = ({ children }: ChildrenProps) => {
  return (
    <div className="rounded-xl bg-slate-400 min-h-500 max-h-580 p-6 mt-6 overflow-scroll">
      {children}
    </div>
  );
};

export default Card;
