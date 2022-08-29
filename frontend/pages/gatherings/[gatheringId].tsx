import Head from "next/head";
import React from "react";
import Button from "../../components/Button/Button";
import DetailCard from "../../components/Card/DetailCard";

const GatheringDetail = () => {
  return (
    <>
      <Head>
        <title>Gathering Detail</title>
      </Head>
      <div className="fixed top-28 left-0 w-full px-5">
        <h2 className="text-2xl pl-0.5 font-bold tracking-tighter text-left text-red-500">
          Moku-Marketing
          {/* title of gathering */}
        </h2>
        <DetailCard />
        <div className="text-center pt-6">
          <Button text="Join" />
        </div>
      </div>
    </>
  );
};

export default GatheringDetail;
