import { GatheringType } from "../../../types/gathering";
import { AdminUser } from "../../../types/admin";
import { GetServerSideProps, NextPage } from "next";
import { server } from "../../../config";
import GatheringPage from "../../../components/pages/gatherings/GatheringPage";
import Meta from "../../../meta/Meta";

interface DataPropsAtGatheringDetail {
  data: { gathering: GatheringType; currUser: AdminUser };
}

const GatheringDetail: NextPage<DataPropsAtGatheringDetail> = ({ data }) => {
  return (
    <>
      <Meta title={"Gathering Detail"} />
      <GatheringPage data={data} />
    </>
  );
};

export default GatheringDetail;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  const gatheringId = params!["gatheringId"];
  const res = await fetch(`${server}/api/gatherings/${gatheringId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const gathering = await res.json();
  const response = await fetch(`${server}/api/getUser`);
  const currUser = await response.json();
  return {
    props: {
      data: { gathering, currUser },
    },
  };
};
