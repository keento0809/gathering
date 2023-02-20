import { GetServerSideProps } from "next";
import Head from "next/head";
import { server } from "../../../config";
import { GatheringProps } from "../../../models/model";
import CompleteBookGathering from "../../../features/gatherings/CompleteBookGathering";

const Completion = ({ gathering }: GatheringProps) => {
  return (
    <>
      <Head>
        <title>Complete</title>
      </Head>
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
