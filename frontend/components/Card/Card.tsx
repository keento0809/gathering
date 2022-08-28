import React from "react";
import ImageSrc from "../../public/static/bgImage.jpg";
import Button from "../Button/Button";
import MainButton from "../Button/MainButton";

const Card = () => {
  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src={ImageSrc.src} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Moku-Marketing
          </h5>
        </a>
        <p className="tracking-tight font-semibold text-base">2022/09/01</p>
        <p className="mb-4 mt-2 font-normal text-gray-700 dark:text-gray-400 text-base">
          A moku-moku event with digital marketers to interact with each other
        </p>
        <MainButton text="Learn more" linkUrl={`/gatherings/${2}`} />
      </div>
    </div>
  );
};

export default Card;
