import { GetServerSideProps } from "next";
import { GatheringsArrayType } from "../../types/gathering";
import { server } from "../../config/index";
import HomeContainer from "../../features/home/HomeContainer";
import Meta from "../../meta/Meta";

const Home = ({ data }: GatheringsArrayType) => {
  return (
    <>
      <Meta title={"Home"} />
      <HomeContainer data={data} />
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
