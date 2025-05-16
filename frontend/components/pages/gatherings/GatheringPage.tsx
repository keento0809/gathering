import MainButton from "../../common/Button/MainButton";
import DetailCard from "../../common/Card/DetailCard";
import { GatheringType } from "../../../types/gathering";
import { AdminUser } from "../../../types/admin";
import Title from "../../common/Title/Title";
import { useGatheringsPage } from "./hooks/useGatheringsPage";

type Props = {
  data: { gathering: GatheringType; currUser: AdminUser };
};

const GatheringPage = ({ data }: Props) => {
  const {
    isMaximum,
    session,
    organizerId,
    currUserId,
    title,
    gatheringId: _id,
    handleBackToHome,
  } = useGatheringsPage({ data });

  return (
    <div className="relative">
      <button
        className="absolute top-1.5 left-20 text-sm cursor-pointer font-semibold border-none background-inherit"
        onClick={handleBackToHome}
      >
        &lt;　Back
      </button>
      <Title title={title} />
      <DetailCard gathering={data.gathering} />
      <div className="text-center py-5 md:py-4 md:z-40">
        {!isMaximum && (
          <span className="block pb-2 text-sm">
            {Number(data.gathering.capacity) -
              Number(data.gathering.participants.length)}{" "}
            seats remaining
          </span>
        )}
        {isMaximum && (
          <p className="text-primary pb-2 text-sm">
            Sorry, This gathering is full.
          </p>
        )}
        {session && organizerId === currUserId && (
          <MainButton text="Manage" linkUrl={`/gatherings/${_id}/manage`} />
        )}
        {!(session && organizerId === currUserId) && (
          <MainButton
            text="Join"
            linkUrl={`/gatherings/${_id}/application`}
            isMaximum={isMaximum}
          />
        )}
      </div>
    </div>
  );
};

export default GatheringPage;
