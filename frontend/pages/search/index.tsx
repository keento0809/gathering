import { GetServerSideProps } from "next";
import { server } from "../../config";
import { GatheringsArrayType } from "../../types/gathering";
import SearchGatheringPage from "../../components/pages/search/SearchGatheringPage";
import Meta from "../../meta/Meta";

const SearchGathering = ({ data }: GatheringsArrayType) => {
  return (
    <>
      <Meta title={"Find Gathering"} />
      <SearchGatheringPage data={data} />
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
