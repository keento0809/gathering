import React, { useEffect, useState } from "react";
import GatheringCard from "../Card/GatheringCard";
import { GatheringsArrayType } from "../../models/model";

const HostGathering = ({ data }: GatheringsArrayType) => {
  const [maxHeight, setMaxHeight] = useState(590);
  const upcomingList = data.map((gathering) => {
    return (
      <li key={gathering._id}>
        <GatheringCard gathering={gathering} />
      </li>
    );
  });

  useEffect(() => {
    if (window.innerHeight < 700) {
      setMaxHeight(360);
    }
  }, []);

  return (
    <ul
      className="text-xl mt-3 overflow-scroll"
      style={{ maxHeight: `${maxHeight}px` }}
    >
      {upcomingList}
    </ul>
  );
};

export default HostGathering;
