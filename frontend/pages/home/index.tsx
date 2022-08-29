import Head from "next/head";
import React from "react";
import Button from "../../components/Button/Button";
import UpcomingGathering from "../../components/Gathering/UpcomingGathering";
import Wrapper from "../../components/Wrapper/Wrapper";

const Home = () => {
  const handleLoadMore = () => {
    console.log("Loaded now");
  };
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
          <h3 className="text-2xl font-bold tracking-tight">Upcoming</h3>
          <UpcomingGathering />
        </div>
        {/* <div className="pt-6 text-center">
          <div className="" onClick={handleLoadMore}>
            <Button text="Load More" />
          </div>
        </div> */}
      </Wrapper>
    </>
  );
};

export default Home;
