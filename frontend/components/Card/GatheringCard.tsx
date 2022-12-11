import React, { useState, useEffect } from "react";
import Image from "next/image";
import { GatheringProps } from "../../models/model";
import CardModal from "../Modal/CardModal";
import MainButton from "../Button/MainButton";
import urlForImage from "/public/static/bgImage.jpg";
import urlForImageSecond from "../../public/static/heroImg.jpg";
import urlForImageThird from "../../public/static/mtg.jpg";
import getTodayString from "../../Helper/getTodayString";
import updateGatheringImage from "../../Helper/updateGatheringImage";

const GatheringCard = ({ gathering }: GatheringProps) => {
  const [isExpired, setIsExpired] = useState(false);
  const todayString = getTodayString();

  useEffect(() => {
    if (todayString > gathering.date) setIsExpired(true);
    if (
      gathering.image !== urlForImage.src &&
      gathering.image !== urlForImageSecond.src &&
      gathering.image !== urlForImageThird.src
    ) {
      updateGatheringImage(gathering);
    }
  }, []);
  return (
    <div className="relative md:max-w-372">
      {isExpired && <CardModal isExpired={true} />}
      {!isExpired && gathering.isFull && <CardModal isExpired={false} />}
      <div className="max-w-sm w-full mb-4 hover:scale-101 transition-transform bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        {/* <div className="max-w-sm w-full min-h-490 mb-4 hover:scale-101 transition-transform bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"> */}
        <a href="#">
          {/* <Image
            className="rounded-t-lg cursor-default"
            width={"372px"}
            height={"248.2px"}
            src={gathering.image!}
            alt="image"
          /> */}
          <img src={gathering.image!} alt="image" className="object-cover" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white cursor-default">
              {gathering.title}
            </h5>
          </a>
          <p className="font-semibold text-base">{gathering.date}</p>
          <p className="mb-4 mt-2 min-h-72 font-normal text-gray-700 dark:text-gray-400 text-base">
            {gathering.headline}
          </p>
          <MainButton text="More" linkUrl={`/gatherings/${gathering._id}`} />
        </div>
      </div>
    </div>
  );
};

export default GatheringCard;
