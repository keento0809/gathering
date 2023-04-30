import { GetServerSideProps } from "next";
import { server } from "../../../config";
import { GatheringProps } from "../../../types/gathering";
import ApplyGatheringPage from "../../../components/pages/gatherings/ApplyGatheringPage";
import Meta from "../../../meta/Meta";

const ApplicationPage = ({ gathering }: GatheringProps) => {
  return (
    <>
      <Meta title={"Application"} />
      <ApplyGatheringPage gathering={gathering} />
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
