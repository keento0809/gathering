import Head from "next/head";
import Card from "../../../components/Card/Card";
import ApplicationForm from "../../../components/Form/ApplicationForm";
import { GetServerSideProps } from "next";
import { server } from "../../../config";
import { GatheringProps } from "../../../models/model";
import { useEffect } from "react";
import { useLoadingContext } from "../../../context/LoadingContext";
import ApplicationGathering from "../../../features/gatherings/ApplicationGathering";

const ApplicationPage = ({ gathering }: GatheringProps) => {
  return (
    <>
      <Head>
        <title>Application</title>
      </Head>
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
