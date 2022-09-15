import Head from "next/head";
import React from "react";
import MainButton from "../../../components/Button/MainButton";
import DetailCard from "../../../components/Card/DetailCard";
import Wrapper from "../../../components/Wrapper/Wrapper";
import { DUMMY_GATHERING_DATA } from "../../../data/data";
import { GatheringProps, GatheringType } from "../../../models/model";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { server } from "../../../config";

const GatheringDetail: NextPage<GatheringProps> = ({ gathering }) => {
  console.log(gathering._id);
  return (
    <>
      <Head>
        <title>Gathering Detail</title>
      </Head>
      <Wrapper>
        <h2 className="text-2xl pl-0.5 font-bold tracking-tighter text-left text-red-500">
          {gathering.title}
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
  console.log(context);

  const gatheringId = params!["gatheringId"];
  const res = await fetch(`${server}/api/gatherings`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const allGatherings = await res.json();
  const gathering = allGatherings.find(
    (data: GatheringType) => data._id!.toString() === gatheringId
  );
  return {
    props: {
      gathering,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${server}/api/gatherings`);
  const allGatherings = await res.json();
  const paths = allGatherings.map((data: GatheringType) => {
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
