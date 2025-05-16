import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useLoadingContext } from "../../../context/LoadingContext";
import { GatheringType } from "../../../../types/gathering";
import { AdminUser } from "../../../../types/admin";
import { useRouter } from "next/router";

type Props = {
  data: { gathering: GatheringType; currUser: AdminUser };
};

export const useGatheringsPage = ({ data }: Props) => {
  const { data: session } = useSession();
  const router = useRouter();
  const { _id, title, participants, capacity, organizer, isFull } =
    data.gathering;
  const currUserId = data.currUser._id;
  const organizerId = organizer.id;
  const [isMaximum, setIsMaximum] = useState(isFull);
  const { isLoading, setIsLoading } = useLoadingContext();

  const handleBackToHome = () => {
    router.push("/home");
  };

  useEffect(() => {
    isLoading && setIsLoading(false);
    participants.length >= capacity ? setIsMaximum(true) : setIsMaximum(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isMaximum,
    session,
    organizerId,
    currUserId,
    title,
    gatheringId: _id,
    handleBackToHome,
  };
};
