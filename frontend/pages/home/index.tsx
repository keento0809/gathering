import { GetServerSideProps } from "next";
import { GatheringsArrayType } from "../../types/gathering";
import { server } from "../../config/index";
import HomePage from "../../components/pages/home/HomePage";
import Meta from "../../meta/Meta";

const Home = ({ data }: GatheringsArrayType) => {
  return (
    <>
      <Meta title={"Home"} />
      <HomePage data={data} />
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

  // Check if response is OK (status in the range 200-299)
  if (!res.ok) {
    console.error(`API error: ${res.status} ${res.statusText}`);
    return { props: { data: [] } };
  }

  const allGatherings = await res.json();
  return {
    props: {
      data: allGatherings,
    },
  };
};
