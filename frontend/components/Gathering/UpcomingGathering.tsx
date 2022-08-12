import React from "react";
import GatheringCard from "../Card/GatheringCard";

const UpcomingGathering = () => {
  return (
    <div className="py-4">
      <h3 className="text-xl font-bold">Upcoming Gathering</h3>
      <ul className="text-xl pt-3">
        <GatheringCard />
      </ul>
    </div>
  );
};

export default UpcomingGathering;
