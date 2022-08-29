import Head from "next/head";
import React from "react";
import Wrapper from "../../components/Wrapper/Wrapper";
import Card from "../../components/Card/Card";
import ApplicationForm from "../../components/Form/ApplicationForm";

const ApplicationPage = () => {
  return (
    <>
      <Head>
        <title>Application</title>
      </Head>
      <Wrapper>
        <h2 className="text-2xl pl-0.5 font-bold tracking-tighter text-center text-red-500">
          Join gathering
          {/* title of gathering */}
        </h2>
        <Card>
          <ApplicationForm />
        </Card>
      </Wrapper>
    </>
  );
};

export default ApplicationPage;
