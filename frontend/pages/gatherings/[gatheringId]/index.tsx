import { GatheringType } from "../../../types/gathering";
import { AdminUserInfoObj } from "../../../types/admin";
import { GetServerSideProps, NextPage } from "next";
import { server } from "../../../config";
import GatheringContainer from "../../../features/gatherings/GatheringContainer";
import Meta from "../../../meta/Meta";

interface DataPropsAtGatheringDetail {
  data: { gathering: GatheringType; currUser: AdminUserInfoObj };
}

const GatheringDetail: NextPage<DataPropsAtGatheringDetail> = ({ data }) => {
  return (
    <>
      <Meta title={"Gathering Detail"} />
      <GatheringContainer data={data} />
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
