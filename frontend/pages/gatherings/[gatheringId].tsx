import Head from "next/head";
import React from "react";
import Button from "../../components/Button/Button";
import MainButton from "../../components/Button/MainButton";
import DetailCard from "../../components/Card/DetailCard";
import Wrapper from "../../components/Wrapper/Wrapper";

const GatheringDetail = () => {
  return (
    <>
      <Head>
        <title>Gathering Detail</title>
      </Head>
      <Wrapper>
        <h2 className="text-2xl pl-0.5 font-bold tracking-tighter text-left text-red-500">
          Moku-Marketing
          {/* title of gathering */}
        </h2>
        <DetailCard />
        <div className="text-center pt-6">
          <MainButton text="Join" linkUrl="/application" />
        </div>
      </Wrapper>
    </>
  );
};

export default GatheringDetail;
