import { GetServerSideProps } from "next";
import { server } from "../../../config";
import { GatheringProps } from "../../../models/model";
import ApplicationGathering from "../../../features/gatherings/ApplicationGathering";
import Meta from "../../../meta/Meta";

const ApplicationPage = ({ gathering }: GatheringProps) => {
  return (
    <>
      <Meta title={"Application"} />
      <ApplicationGathering gathering={gathering} />
    </>
  );
};

export default ApplicationPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  const gatheringId = params!["gatheringId"];
  const response = await fetch(`${server}/api/gatherings/${gatheringId}`);
  const gathering = await response.json();
  return {
    props: {
      gathering,
    },
  };
};
