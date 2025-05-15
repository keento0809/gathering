import { useEffect } from "react";
import Image from "next/image";
import { GatheringProps } from "../../../types/gathering";
import CardModal from "../Modal/CardModal";
import MainButton from "../Button/MainButton";
import urlForImage from "../../../public/static/mtg_1.jpg";
import urlForImageSecond from "../../../public/static/mtg_2.jpg";
import urlForImageThird from "../../../public/static/mtg_3.jpg";
import updateGatheringImage from "../../../helpers/updateGatheringImage";
import isGatheringExpired from "../../../helpers/isGatheringExpired";
import Link from "next/link";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Link href={`/gatherings/${gathering._id}`} className="block relative">
      {/* // wrapper div for Link tag */}
      <div
        className={`relative cursor-pointer max-w-372 w-full mb-4 hover:scale-101 transition-transform bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-lg dark:bg-gray-800 dark:border-gray-700 ${
          isExpired && "pointer-events-none cursor-not-allowed"
        }`}
      >
        {/* If the gathering is expired (past one), Card Modal should be appeared */}
        {isExpired && <CardModal isExpired={true} />}
        <Image
          src={gathering.image!}
          alt="image"
          className="object-cover"
          width={374}
          height={248}
        />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-textPrimary dark:text-white cursor-default">
            {gathering.title}
          </h5>
          <p className="font-semibold text-base">{gathering.date}</p>
          <p className="mb-4 mt-2 min-h-72 font-normal text-gray-700 dark:text-gray-400 text-base">
            {gathering.headline}
          </p>
          <MainButton text="More" linkUrl={`/gatherings/${gathering._id}`} />
        </div>
      </div>
    </Link>
  );
};

export default GatheringCard;
