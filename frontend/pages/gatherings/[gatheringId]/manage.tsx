import React from "react";
import Head from "next/head";
import Wrapper from "../../../components/Wrapper/Wrapper";
import Card from "../../../components/Card/Card";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";

const Manage = () => {
  return (
    <>
      <Head>
        <title>Manage</title>
      </Head>
      <Wrapper>
        <h2 className="text-2xl text-center font-bold tracking-tighter text-left text-red-500">
          Manage Gathering
        </h2>
        <Card>
          <p>aaa</p>
        </Card>
      </Wrapper>
    </>
  );
};

export default Manage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
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
    },
  };
};
