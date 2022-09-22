import Head from "next/head";
import React, { useEffect, useState } from "react";
import MainButton from "../../../components/Button/MainButton";
import DetailCard from "../../../components/Card/DetailCard";
import Wrapper from "../../../components/Wrapper/Wrapper";
import { GatheringProps, GatheringType } from "../../../models/model";
import {
  GetServerSideProps,
  GetStaticPaths,
  GetStaticProps,
  NextPage,
} from "next";
import { server } from "../../../config";

const GatheringDetail: NextPage<GatheringProps> = ({ gathering }) => {
  const { title, participants, capacity } = gathering;
  const [isMaximum, setIsMaximum] = useState(false);
  useEffect(() => {
    participants.length > capacity ? setIsMaximum(true) : setIsMaximum(false);
  }, []);
  return (
    <>
      <Head>
        <title>Gathering Detail</title>
      </Head>
      <Wrapper>
        <h2 className="text-2xl pl-0.5 font-bold tracking-tighter text-left text-red-500">
          {title}
        </h2>
        <DetailCard gathering={gathering} />
        <div className="text-center pt-6">
          {isMaximum && (
            <p className="text-red-500 pb-2">Sorry, This gathering is full.</p>
          )}
          <MainButton
            text="Join"
            linkUrl={`/gatherings/${gathering._id}/application`}
            isMaximum={isMaximum}
          />
        </div>
      </Wrapper>
    </>
  );
};

export default GatheringDetail;

// test
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
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

// export const getStaticProps: GetStaticProps = async (context) => {
//   const { params } = context;
//   console.log(context);

//   const gatheringId = params!["gatheringId"];
//   const res = await fetch(`${server}/api/gatherings`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   const allGatherings = await res.json();
//   const gathering = allGatherings.find(
//     (data: GatheringType) => data._id!.toString() === gatheringId
//   );
//   return {
//     props: {
//       gathering,
//     },
//   };
// };

// export const getStaticPaths: GetStaticPaths = async () => {
//   const res = await fetch(`${server}/api/gatherings`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   const allGatherings = await res.json();
//   console.log(typeof [allGatherings]);

//   // const paths = allGatherings.map((data: GatheringType) => {
//   const paths = allGatherings.map((data: GatheringType) => {
//     return {
//       params: {
//         gatheringId: `${data._id}`,
//       },
//     };
//   });
//   return {
//     paths,
//     fallback: false,
//   };
// };
