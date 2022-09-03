import Head from "next/head";
import React from "react";
import MainButton from "../../../../components/Button/MainButton";
import Card from "../../../../components/Card/Card";
import CreateGatheringForm from "../../../../components/Form/CreateGatheringForm";
import Wrapper from "../../../../components/Wrapper/Wrapper";

const NewGathering = () => {
  return (
    <>
      <Head>
        <title>Create New Gathering</title>
      </Head>
      <Wrapper>
        <div className="">
          <h2 className="text-2xl font-bold tracking-tighter text-center text-red-500 dark:text-red-400">
            Create Gathering
          </h2>
          <Card>
            <CreateGatheringForm />
          </Card>
          <div className="text-center pt-6">
            <MainButton text="Back" linkUrl={`/admin/${1}`} />
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default NewGathering;