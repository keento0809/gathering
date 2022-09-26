import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import Head from "next/head";
import React, { useEffect } from "react";
import MainButton from "../../../../components/Button/MainButton";
import Card from "../../../../components/Card/Card";
import CreateGatheringForm from "../../../../components/Form/CreateGatheringForm";
import Wrapper from "../../../../components/Wrapper/Wrapper";
import { server } from "../../../../config/index";
import { adminUserProps } from "../../../../models/model";
import { useRouter } from "next/router";

const NewGathering = ({ currentUser }: adminUserProps) => {
  const router = useRouter();
  const testQuery = router.query;
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
            <CreateGatheringForm currentUser={currentUser} />
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  const res = await fetch(`${server}/api/getUser`);
  const currUser = await res.json();

  const currentUser = {
    id: currUser._id,
    username: currUser.name,
    email: currUser.email,
    hostGathering: [],
  };

  if (!session) {
    return {
      redirect: {
        destination: `/admin/home?callbackUrl=${process.env.REDIRECT_URL}`,
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
      data: session ? "Logged In" : "Not logged in",
      currentUser,
    },
  };
};
