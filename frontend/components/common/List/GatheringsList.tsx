import GatheringCard from "../Card/GatheringCard";
import { GatheringsArrayType } from "../../../types/gathering";

const GatheringsList = ({ data }: GatheringsArrayType) => {
  const upcomingList = data.map((gathering) => {
    return (
      <li
        key={gathering._id}
        className="md:pr-4 md:min-w-0 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
      >
        <GatheringCard gathering={gathering} />
      </li>
    );
  });
  return (
    <ul className="text-xl mt-3 md:pb-24 overflow-scroll md:overflow-auto md:flex md:flex-wrap md:justify-start">
      {upcomingList}
    </ul>
  );
};

export default GatheringsList;
