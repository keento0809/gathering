import Head from "next/head";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { server } from "../../../config";
import { GatheringProps } from "../../../models/model";
import ManageGathering from "../../../features/gatherings/ManageGathering";

const Manage = ({ gathering }: GatheringProps) => {
  return (
    <>
      <Head>
        <title>Manage</title>
      </Head>
      <ManageGathering gathering={gathering} />
    </>
  );
};

export default Manage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  const { params } = context;
  const gatheringId = params!["gatheringId"];
  const response = await fetch(`${server}/api/gatherings/${gatheringId}`);
  const gathering = await response.json();

  if (!session) {
    return {
      redirect: {
        destination: `/admin/home?callbackUrl=${process.env.REDIRECT_URL}`,
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
      gathering,
    },
  };
};
