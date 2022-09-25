import Head from "next/head";
import React from "react";
import Wrapper from "../../../components/Wrapper/Wrapper";
import Card from "../../../components/Card/Card";
import ApplicationForm from "../../../components/Form/ApplicationForm";
import { GetServerSideProps } from "next";
import { server } from "../../../config";
import { GatheringProps } from "../../../models/model";

const ApplicationPage = ({ gathering }: GatheringProps) => {
  return (
    <>
      <Head>
        <title>Application</title>
      </Head>
      <Wrapper>
        <h2 className="text-2xl font-bold tracking-tighter text-center text-red-500">
          Book gathering
        </h2>
        <p className="text-sm pt-8 px-2">
          Please fill out your information to join the gathering. After pushing
          the confirm button, your booking will be secured immediately.
        </p>
        <Card>
          <ApplicationForm gathering={gathering} />
        </Card>
      </Wrapper>
    </>
  );
};

export default ApplicationPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  const gatheringId = params!["gatheringId"];
  const response = await fetch(`${server}/api/gatherings/${gatheringId}`);
  const gathering = await response.json();
  console.log(gathering);
  return {
    props: {
      gathering,
    },
  };
};
