import React, { useState, useEffect } from "react";
import { GatheringProps } from "../../models/model";
import MainButton from "../Button/MainButton";
import urlForImage from "../../public/static/bgImage.jpg";

const GatheringCard = ({ gathering }: GatheringProps) => {
  const [imageUrl, setImageUrl] = useState("");
  useEffect(() => {
    setImageUrl(urlForImage.src);
    gathering.image = urlForImage.src;
  }, []);
  return (
    <div className="max-w-sm w-full mb-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src={imageUrl} alt="image" />
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
