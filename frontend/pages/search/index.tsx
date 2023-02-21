import { GetServerSideProps } from "next";
import { server } from "../../config";
import { GatheringsArrayType } from "../../models/model";
import Head from "next/head";
import SearchGatheringContainer from "../../features/search/SearchContainer";
import Meta from "../../meta/Meta";

const SearchGathering = ({ data }: GatheringsArrayType) => {
  return (
    <>
      <Meta title={"Find Gathering"} />
      <SearchGatheringContainer data={data} />
    </>
  );
};

export default SearchGathering;

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch(`${server}/api/gatherings`);
  const allGatherings = await response.json();
  return {
    props: {
      data: allGatherings,
    },
  };
};
