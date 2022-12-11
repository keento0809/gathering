import React, { useEffect, useState } from "react";
import GatheringCard from "../Card/GatheringCard";
import { GatheringsArrayType } from "../../models/model";

const GatheringsList = ({ data }: GatheringsArrayType) => {
  const [maxHeight, setMaxHeight] = useState(590);
  const upcomingList = data.map((gathering) => {
    return (
      <li
        key={gathering._id}
        className="md:pr-4 md:min-w-0 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
        // className="min-w-374 md:pr-4 md:min-w-0 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
      >
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
      className="text-xl mt-3 md:pb-24 overflow-scroll md:flex md:flex-wrap md:justify-start"
      // style={{ maxHeight: `${maxHeight}px` }}
    >
      {upcomingList}
    </ul>
  );
};

export default GatheringsList;
