import React from "react";
import GatheringCard from "../Card/GatheringCard";
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
    <ul
      className="text-xl mt-3 max-h-590 overflow-scroll"
      style={{ maxHeight: "590px" }}
    >
      {upcomingList}
      {/* <GatheringCard gathering={gathering} /> */}
    </ul>
  );
};

export default UpcomingGathering;
