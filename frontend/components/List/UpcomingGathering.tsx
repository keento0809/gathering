import React from "react";
import GatheringCard from "../Card/GatheringCard";
import { DUMMY_GATHERING_DATA } from "../../data/data";
import { GatheringsArrayType } from "../../models/model";

const UpcomingGathering = ({ data }: GatheringsArrayType) => {
  const upcomingList = data.map((gathering) => {
    return (
      <li key={gathering._id}>
        <GatheringCard gathering={gathering} />
      </li>
    );
  });
  return (
    <ul className="text-xl pt-3 max-h-590 overflow-scroll">
      {upcomingList}
      {/* <GatheringCard gathering={gathering} /> */}
    </ul>
  );
};

export default UpcomingGathering;
