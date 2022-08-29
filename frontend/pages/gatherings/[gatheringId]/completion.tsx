import Head from "next/head";
import React from "react";
import MainButton from "../../../components/Button/MainButton";
import Card from "../../../components/Card/Card";
import Wrapper from "../../../components/Wrapper/Wrapper";

const Completion = () => {
  return (
    <>
      <Head>
        <title>Complete</title>
      </Head>
      <Wrapper>
        <h2 className="text-2xl text-center font-bold tracking-tighter text-left text-red-500">
          Confirmed!
        </h2>
        <Card>
          <div className="pt-2">
            <p className="text-lg font-bold tracking-tight">
              Your booking has been secured!
            </p>
            <p className="text-lg font-bold tracking-tight">
              Please check the details below.
            </p>
          </div>
          {/* CompletionCard */}
        </Card>
        <div className="text-center pt-8">
          <MainButton text="Home" linkUrl="/" />
        </div>
      </Wrapper>
      ;
    </>
  );
};

export default Completion;
