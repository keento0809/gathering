import { useEffect, useState } from "react";
import MainButton from "../../components/Button/MainButton";
import DetailCard from "../../components/Card/DetailCard";
import { GatheringType } from "../../types/gathering";
import { AdminUserInfoObj } from "../../types/admin";
import { useSession } from "next-auth/react";
import { useLoadingContext } from "../../context/LoadingContext";
import Title from "../../components/Title/Title";

type Props = {
  data: { gathering: GatheringType; currUser: AdminUserInfoObj };
};

const GatheringContainer = ({ data }: Props) => {
  const { data: session } = useSession();
  const { _id, title, participants, capacity, organizer, isFull } =
    data.gathering;
  const currUserId = data.currUser._id;
  const organizerId = organizer.id;
  const [isMaximum, setIsMaximum] = useState(isFull);
  const { isLoading, setIsLoading } = useLoadingContext();

  useEffect(() => {
    isLoading && setIsLoading(false);
    participants.length >= capacity ? setIsMaximum(true) : setIsMaximum(false);
  }, []);

  return (
    <>
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
    </>
  );
};

export default GatheringContainer;
