import Head from "next/head";
import React from "react";
import MainButton from "../../../components/Button/MainButton";
import DetailCard from "../../../components/Card/DetailCard";
import Wrapper from "../../../components/Wrapper/Wrapper";
import { DUMMY_GATHERING_DATA } from "../../../data/data";
import { GatheringProps, GatheringType } from "../../../models/model";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

const GatheringDetail: NextPage<GatheringProps> = ({ gathering }) => {
  return (
    <>
      <Head>
        <title>Gathering Detail</title>
      </Head>
      <Wrapper>
        <h2 className="text-2xl pl-0.5 font-bold tracking-tighter text-left text-red-500">
          {gathering.title}
          {/* title of gathering */}
        </h2>
        <DetailCard gathering={gathering} />
        <div className="text-center pt-6">
          <MainButton
            text="Join"
            linkUrl={`/gatherings/${gathering._id}/application`}
          />
        </div>
      </Wrapper>
    </>
  );
};

export default GatheringDetail;

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const gatheringId = params!["gatheringId"];

  const gathering = DUMMY_GATHERING_DATA.find(
    (data) => data._id.toString() === gatheringId
  );
  return {
    props: {
      gathering,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = DUMMY_GATHERING_DATA.map((data) => {
    return {
      params: {
        gatheringId: `${data._id}`,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
