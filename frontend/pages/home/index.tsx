import { GetServerSideProps } from "next";
import Head from "next/head";
import React from "react";
import UpcomingGathering from "../../components/List/UpcomingGathering";
import Wrapper from "../../components/Wrapper/Wrapper";
import { DUMMY_GATHERING_DATA } from "../../data/data";
import { GatheringsArrayType } from "../../models/model";
import { server } from "../../config/index";

const Home = ({ data }: GatheringsArrayType) => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Wrapper>
        <div className="home-title">
          <h3 className="text-3xl text-red-500 font-bold tracking-tight">
            Welcome to Gathering!
          </h3>
          <p className="font-normal text-md pt-1 tracking-tight">
            Explore new gathering here
          </p>
        </div>
        <div className="pt-8 pb-4">
          <h3 className="text-2xl font-bold tracking-tight overflow-y-scroll">
            Upcoming
          </h3>
          <UpcomingGathering data={data} />
        </div>
      </Wrapper>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`${server}/api/gatherings`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const allGatherings = await res.json();
  return {
    props: {
      data: allGatherings,
    },
  };
};
