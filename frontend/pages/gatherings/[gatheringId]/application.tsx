import Head from "next/head";
import React from "react";
import Wrapper from "../../../components/Wrapper/Wrapper";
import Card from "../../../components/Card/Card";
import ApplicationForm from "../../../components/Form/ApplicationForm";
import { useRouter } from "next/router";

const ApplicationPage = () => {
  const router = useRouter();
  const { gatheringId } = router.query;

  return (
    <>
      <Head>
        <title>Application</title>
      </Head>
      <Wrapper>
        <h2 className="text-2xl font-bold tracking-tighter text-center text-red-500">
          Book gathering
          {/* title of gathering */}
        </h2>
        <p className="text-sm pt-8 px-2">
          Please fill out your information to join the gathering. After pushing
          the confirm button, your booking will be secured immediately.
        </p>
        <Card>
          <ApplicationForm gatheringId={gatheringId} />
        </Card>
      </Wrapper>
    </>
  );
};

export default ApplicationPage;
