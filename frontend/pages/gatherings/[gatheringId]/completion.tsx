import { GetServerSideProps } from "next";
import { server } from "../../../config";
import { GatheringProps } from "../../../types/gathering";
import CompleteBookGathering from "../../../features/gatherings/CompleteBookGathering";
import Meta from "../../../meta/Meta";

const Completion = ({ gathering }: GatheringProps) => {
  return (
    <>
      <Meta title={"Complete booking"} />
      <CompleteBookGathering gathering={gathering} />
    </>
  );
};

export default Completion;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  const gatheringId = params!["gatheringId"];
  const response = await fetch(`${server}/api/gatherings/${gatheringId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const gathering = await response.json();
  return {
    props: {
      gathering,
    },
  };
};
