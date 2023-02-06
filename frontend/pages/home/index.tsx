import { GetServerSideProps } from "next";
import Head from "next/head";
import { useState, useEffect } from "react";
import GatheringsList from "../../components/List/GatheringsList";
import { GatheringsArrayType } from "../../models/model";
import { server } from "../../config/index";
import sortGatherings from "../../Helper/sortGatherings";
import { useLoadingContext } from "../../context/LoadingContext";

const Home = ({ data }: GatheringsArrayType) => {
  const [bool, setBool] = useState<Boolean>(false);
  const handleToggleContents = (currBool: Boolean, text: string) => {
    if ((currBool && text === "past") || (!currBool && text === "upcoming"))
      return;
    setBool(!bool);
  };
  const { upcomingGatherings, expiredGatherings } = sortGatherings(data);
  const { isLoading, setIsLoading } = useLoadingContext();

  useEffect(() => {
    isLoading && setIsLoading(false);
  }, []);
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div>
        <div className="home-title lg:text-center">
          <h3 className="text-3xl text-primary font-bold tracking-tight">
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
                className={`${!bool ? "text-primary border-primary" : ""} ${
                  bool && "border-transparent"
                } inline-block text-xl cursor-pointer border-b-4 pb-0.5 lg:pb-1 lg:text-center font-bold tracking-tight overflow-y-scroll transition-all`}
              >
                Upcoming
              </h3>
            </div>
            <div className="pl-4">
              <h3
                onClick={() => handleToggleContents(bool, "past")}
                className={`${bool ? "text-primary border-primary" : ""} ${
                  !bool && "border-transparent"
                } inline-block text-xl border-b-4 cursor-pointer pb-0.5 lg:pb-1 lg:text-center font-bold tracking-tight overflow-y-scroll transition-all`}
              >
                Past
              </h3>
            </div>
          </div>
          <div className={`${bool ? "hidden" : "block"}`}>
            <GatheringsList data={upcomingGatherings} />
            {upcomingGatherings.length === 0 && (
              <p className="text-lg font-semibold pt-2">
                No Upcoming Gatherings Found
              </p>
            )}
          </div>
          <div className={`${!bool ? "hidden" : "block"}`}>
            <GatheringsList data={expiredGatherings} />
            {expiredGatherings.length === 0 && (
              <p className="text-lg font-semibold pt-2">
                No Expired Gatherings Found
              </p>
            )}
          </div>
        </div>
      </div>
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
