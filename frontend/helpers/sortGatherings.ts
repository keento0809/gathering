import { GatheringType } from "../types/gathering";
import isGatheringExpired from "./isGatheringExpired";

const sortGatherings = (data: GatheringType[]) => {
  const upcomingGatherings: GatheringType[] | null = [];
  const expiredGatherings: GatheringType[] | null = [];
  data.forEach((gathering) => {
    isGatheringExpired(gathering.date)
      ? expiredGatherings.push(gathering)
      : upcomingGatherings.push(gathering);
  });
  return { upcomingGatherings, expiredGatherings };
};

export default sortGatherings;
