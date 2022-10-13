import { GetServerSideProps, GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
import GatheringsList from "../../components/List/GatheringsList";
import Wrapper from "../../components/Wrapper/Wrapper";
import { GatheringsArrayType, GatheringType } from "../../models/model";
import { server } from "../../config/index";
import getTodayString from "../../Helper/getTodayString";

const Home = ({ data }: GatheringsArrayType) => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Wrapper>
        <div className="home-title lg:text-center">
          <h3 className="text-3xl text-red-500 font-bold tracking-tight">
            Welcome to Gathering!
          </h3>
          <p className="font-normal text-md pt-1 tracking-tight">
            Explore new gathering here
          </p>
        </div>
        <div className="pt-8 lg:pt-4 pb-4">
          <h3 className="text-2xl lg:pb-2 lg:text-center font-bold tracking-tight overflow-y-scroll">
            Upcoming
          </h3>
          <GatheringsList data={data} />
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
  // const today = getTodayString();
  // const upcomingGatherings = allGatherings.filter(
  //   (data: GatheringType) => data.date > today
  // );
  return {
    props: {
      data: allGatherings,
    },
  };
};
