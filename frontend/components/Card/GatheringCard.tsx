import React, { useState, useEffect } from "react";
import Image from "next/image";
import { GatheringProps } from "../../models/model";
import CardModal from "../Modal/CardModal";
import MainButton from "../Button/MainButton";
import urlForImage from "/public/static/bgImage.jpg";
import { server } from "../../config";
import getTodayString from "../../Helper/getTodayString";

const GatheringCard = ({ gathering }: GatheringProps) => {
  const [isExpired, setIsExpired] = useState(false);
  const todayString = getTodayString();

  const updateImage = async () => {
    try {
      await fetch(`${server}/api/gatherings/${gathering._id}/image`, {
        method: "POST",
        body: urlForImage.src,
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (todayString > gathering.date) setIsExpired(true);
    if (gathering.image !== urlForImage.src) {
      gathering.image = urlForImage.src;
      updateImage();
    }
  }, []);
  return (
    <div className="relative">
      {isExpired && <CardModal />}
      <div className="max-w-sm w-full mb-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <Image className="rounded-t-lg" src={urlForImage} alt="image" />
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
    </div>
  );
};

export default GatheringCard;
