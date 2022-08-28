import React from "react";
import Card from "../Card/Card";

const UpcomingGathering = () => {
  // const upcomingList = lists.map((gathering,index) => {
  //   return <li key={index}></li>
  // })
  return (
    <ul className="text-xl pt-3">
      {/* {upcomingList} */}
      <Card />
    </ul>
  );
};

export default UpcomingGathering;
