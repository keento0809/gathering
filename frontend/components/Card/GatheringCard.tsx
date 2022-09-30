import React, { useState, useEffect } from "react";
import { GatheringProps } from "../../models/model";
import MainButton from "../Button/MainButton";
import urlForImage from "../../public/static/bgImage.jpg";
import { server } from "../../config";

const GatheringCard = ({ gathering }: GatheringProps) => {
  const [imageUrl, setImageUrl] = useState("");
  const [isExpired, setIsExpired] = useState(false);
  let today = new Date();
  const todayString = today.toISOString().split("T")[0];

  useEffect(() => {
    if (todayString > gathering.date) setIsExpired(true);
    setImageUrl(urlForImage.src);
    gathering.image = urlForImage.src;
  }, []);
  return (
    <div className="relative">
      {/* modal for outdated gathering */}
      {isExpired && (
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-slate-700 rounded-lg z-40 opacity-80">
          <div className="modal-container text-red-500 flex justify-center items-center h-full">
            <p className="text-2xl font-semibold">This gathering is expired.</p>
          </div>
        </div>
      )}
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
    </div>
  );
};

export default GatheringCard;
