import React, { Fragment } from "react";
import GatheringCard from "../Card/GatheringCard";

const MyGathering = () => {
  return (
    <div className="py-4">
      <h3 className="text-xl font-bold">My Gathering</h3>
      <ul className="pt-3 text-xl font-bold">
        {/* I'll use map here */}
        <GatheringCard />
      </ul>
    </div>
  );
};

export default MyGathering;
