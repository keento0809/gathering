import { useState, useEffect } from "react";
import Image from "next/image";
import { GatheringProps } from "../../models/model";
import CardModal from "../Modal/CardModal";
import MainButton from "../Button/MainButton";
import urlForImage from "/public/static/bgImage.jpg";
import urlForImageSecond from "../../public/static/heroImg.jpg";
import urlForImageThird from "../../public/static/mtg.jpg";
import updateGatheringImage from "../../Helper/updateGatheringImage";
import isGatheringExpired from "../../Helper/isGatheringExpired";

const GatheringCard = ({ gathering }: GatheringProps) => {
  const [isExpired, setIsExpired] = useState(false);
  useEffect(() => {
    setIsExpired(isGatheringExpired(gathering.date));
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
      <div className="max-w-sm w-full mb-4 hover:scale-101 transition-transform bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-lg dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <Image
            src={gathering.image!}
            alt="image"
            className="object-cover"
            width={374}
            height={248}
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-textPrimary dark:text-white cursor-default">
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
