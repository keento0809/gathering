import { useEffect } from "react";
import Image from "next/image";
import { GatheringProps } from "../../types/gathering";
import CardModal from "../Modal/CardModal";
import MainButton from "../Button/MainButton";
import urlForImage from "../../public/static/mtg_1.jpg";
import urlForImageSecond from "../../public/static/mtg_2.jpg";
import urlForImageThird from "../../public/static/mtg_3.jpg";
import updateGatheringImage from "../../helpers/updateGatheringImage";
import isGatheringExpired from "../../helpers/isGatheringExpired";

const GatheringCard = ({ gathering }: GatheringProps) => {
  const isExpired = isGatheringExpired(gathering.date);
  useEffect(() => {
    if (
      gathering.image !== urlForImage.src &&
      gathering.image !== urlForImageSecond.src &&
      gathering.image !== urlForImageThird.src
    ) {
      updateGatheringImage(gathering);
    }
  }, []);
  return (
    <div className="relative max-w-372 w-full mb-4 hover:scale-101 transition-transform bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-lg dark:bg-gray-800 dark:border-gray-700">
      {/* If the gathering is expired (past one), Card Modal should be appeared */}
      {isExpired && <CardModal isExpired={true} />}
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
  );
};

export default GatheringCard;
