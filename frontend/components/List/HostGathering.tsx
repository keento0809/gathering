import React, { useEffect, useState } from "react";
import GatheringCard from "../Card/GatheringCard";
import { GatheringsArrayType } from "../../models/model";

const HostGathering = ({ data }: GatheringsArrayType) => {
  const [maxHeight, setMaxHeight] = useState(590);
  const upcomingList = data.map((gathering) => {
    return (
      <li key={gathering._id} className="min-w-374 md:min-w-0 md:basis-350">
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
      className="flex text-xl mt-3 overflow-scroll md:flex md:justify-between"
      style={{ maxHeight: `${maxHeight}px` }}
    >
      {upcomingList}
    </ul>
  );
};

export default HostGathering;
