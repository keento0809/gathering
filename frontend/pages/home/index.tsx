import Head from "next/head";
import React from "react";
import UpcomingGathering from "../../components/Gathering/UpcomingGathering";
import { useRouter } from "next/router";
import Carousel from "../../components/Carousel/Carousel";

const Home = () => {
  const router = useRouter();

  const handleLogout = () => {
    console.log("logging out");
    router.replace("/");
  };
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="fixed top-28 left-0 w-full px-5">
        <div className="home-title">
          <h3 className="text-3xl text-red-500 font-bold tracking-tight">
            Welcome to Gathering!
          </h3>
          <p className="font-normal text-md pt-1 tracking-tight">
            Explore new gathering here
          </p>
        </div>
        <div className="pt-10 pb-4">
          <h3 className="text-2xl font-bold tracking-tight">Upcoming</h3>
          <UpcomingGathering />
        </div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </>
  );
};

export default Home;
