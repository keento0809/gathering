import Head from "next/head";
import React, { useEffect, useState } from "react";
import MainButton from "../../../components/Button/MainButton";
import DetailCard from "../../../components/Card/DetailCard";
import Wrapper from "../../../components/Wrapper/Wrapper";
import { GatheringType, adminUserInfoObjType } from "../../../models/model";
import { GetServerSideProps, NextPage } from "next";
import { server } from "../../../config";
import { useSession } from "next-auth/react";

interface DataPropsAtGatheringDetail {
  data: { gathering: GatheringType; currUser: adminUserInfoObjType };
}

const GatheringDetail: NextPage<DataPropsAtGatheringDetail> = ({ data }) => {
  const { data: session } = useSession();
  const { _id, title, participants, capacity, organizer, isFull } =
    data.gathering;
  const currUserId = data.currUser._id;
  const organizerId = organizer.id;
  const [isMaximum, setIsMaximum] = useState(isFull);
  useEffect(() => {
    participants.length >= capacity ? setIsMaximum(true) : setIsMaximum(false);
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
        {/* <p className="text-xs pt-4 px-2">
          Please fill out your information to join the gathering. After pushing
          the confirm button, your booking will be secured immediately.
        </p> */}
        <DetailCard gathering={data.gathering} />
        <div className="text-center pt-4 md:fixed md:bottom-14 md:right-16 md:z-40">
          {!isMaximum && (
            <span className="block pb-2 text-sm">
              {Number(data.gathering.capacity) -
                Number(data.gathering.participants.length)}{" "}
              seats remaining
            </span>
          )}
          {isMaximum && (
            <p className="text-red-500 pb-2 text-sm">
              Sorry, This gathering is full.
            </p>
          )}
          {session && organizerId === currUserId && (
            <MainButton text="Manage" linkUrl={`/gatherings/${_id}/manage`} />
          )}
          {!(session && organizerId === currUserId) && (
            <MainButton
              text="Join"
              linkUrl={`/gatherings/${_id}/application`}
              isMaximum={isMaximum}
            />
          )}
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
  const res = await fetch(`${server}/api/gatherings/${gatheringId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const gathering = await res.json();
  const response = await fetch(`${server}/api/getUser`);
  const currUser = await response.json();
  return {
    props: {
      data: { gathering, currUser },
    },
  };
};
