import React, { useEffect, useState } from "react";
import { ChildrenProps } from "../../models/model";

const Card = ({ children }: ChildrenProps) => {
  const [minHeight, setMinHeight] = useState(500);
  const [maxHeight, setMaxHeight] = useState(580);
  useEffect(() => {
    if (window.innerHeight < 700) {
      setMaxHeight(360);
      setMinHeight(300);
    }
  }, []);
  return (
    <div
      className="rounded-xl bg-slate-400 p-6 mt-6 overflow-scroll"
      style={{ minHeight: `${minHeight}px`, maxHeight: `${maxHeight}px` }}
    >
      {children}
    </div>
  );
};

export default Card;
