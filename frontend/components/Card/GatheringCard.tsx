import React from "react";
import { GatheringProps, GatheringType } from "../../models/model";
import ImageSrc from "../../public/static/bgImage.jpg";
import Button from "../Button/Button";
import MainButton from "../Button/MainButton";

const GatheringCard = ({ gathering }: GatheringProps) => {
  return (
    <div className="max-w-sm w-full mb-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src={gathering.image} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {gathering.title}
          </h5>
        </a>
        <p className="font-semibold text-base">{gathering.date}</p>
        <p className="mb-4 mt-2 font-normal text-gray-700 dark:text-gray-400 text-base">
          {gathering.headline}
        </p>
        <MainButton text="More" linkUrl={`/gatherings/${gathering._id}`} />
      </div>
    </div>
  );
};

export default GatheringCard;
