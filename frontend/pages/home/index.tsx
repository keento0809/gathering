import { GetServerSideProps, GetStaticProps } from "next";
import Head from "next/head";
import React, { useState } from "react";
import GatheringsList from "../../components/List/GatheringsList";
import Wrapper from "../../components/Wrapper/Wrapper";
import { GatheringsArrayType } from "../../models/model";
import { server } from "../../config/index";

const Home = ({ data }: GatheringsArrayType) => {
  const [bool, setBool] = useState<Boolean>(false);
  const handleToggleContents = (currBool: Boolean, text: string) => {
    // validation
    if ((bool && text === "past") || (!bool && text === "upcoming")) return;
    setBool(!bool);
  };
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Wrapper>
        <div className="home-title lg:text-center pt-24">
          <h3 className="text-3xl text-red-500 font-bold tracking-tight">
            Welcome to Gathering!
          </h3>
          <p className="font-normal text-md pt-1 tracking-tight">
            Explore new gathering here
          </p>
        </div>
        <div className="pt-8 lg:pt-12 pb-4">
          <div className="flex flex-row justify-start lg:justify-center">
            <div className="">
              <h3
                onClick={() => handleToggleContents(bool, "upcoming")}
                className={`${
                  !bool ? "text-red-500 border-b-red-500" : ""
                } inline-block text-xl cursor-pointer border-b-4 border-transparent pb-0.5 lg:pb-1 lg:text-center font-bold tracking-tight overflow-y-scroll transition-all`}
              >
                Upcoming
              </h3>
            </div>
            <div className="pl-4">
              <h3
                onClick={() => handleToggleContents(bool, "past")}
                className={`${
                  bool ? "text-red-500 border-b-red-500" : ""
                } inline-block text-xl border-b-4 border-transparent cursor-pointer pb-0.5 lg:pb-1 lg:text-center font-bold tracking-tight overflow-y-scroll transition-all`}
              >
                Past
              </h3>
            </div>
          </div>
          <div className={`${bool ? "hidden" : "block"}`}>
            {/* temporary */}
            {/* <GatheringsList data={data} /> */}
            <p>Nothing comes</p>
          </div>
          <div className={`${!bool ? "hidden" : "block"}`}>
            <GatheringsList data={data} />
          </div>
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
