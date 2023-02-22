import { useEffect, useState } from "react";
import { ChildrenProps } from "../../types/index";

const Card = ({ children }: ChildrenProps) => {
  const [minHeight, setMinHeight] = useState(500);
  const [maxHeight, setMaxHeight] = useState(580);

  useEffect(() => {
    if (window.outerHeight < 790) {
      setMaxHeight(360);
      setMinHeight(300);
    } else if (window.outerHeight >= 790 && window.outerHeight < 850) {
      setMaxHeight(500);
      setMinHeight(300);
    } else if (window.outerHeight < 896 && window.outerHeight >= 850) {
      setMaxHeight(530);
      setMinHeight(300);
    } else if (window.innerHeight >= 896) {
      setMaxHeight(600);
      setMinHeight(300);
    } else if (window.innerWidth >= 768) {
      setMaxHeight(520);
      setMinHeight(520);
    }
  }, []);
  return (
    <div
      className="rounded-xl bg-bgForCard p-6 mt-6 overflow-scroll lg:max-w-1000 lg:mx-auto"
      style={{ minHeight: `${minHeight}px`, maxHeight: `${maxHeight}px` }}
    >
      {children}
    </div>
  );
};

export default Card;
