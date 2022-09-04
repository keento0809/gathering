import Head from "next/head";
import React from "react";
import Wrapper from "../../../components/Wrapper/Wrapper";
import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import Button from "../../../components/Button/Button";
import MainButton from "../../../components/Button/MainButton";
import GithubAuthButton from "../../../components/Button/GithubAuthButton";
import { signOut } from "next-auth/react";

const AdminHome = () => {
  return (
    <>
      <Head>
        <title>Admin Home</title>
      </Head>
      <Wrapper>
        <div className="home-title">
          <h3 className="text-3xl text-red-500 font-bold tracking-tight">
            Hello, Admin!
          </h3>
          {/* <p className="font-normal text-md pt-1 tracking-tight">
            Explore new gathering here
          </p> */}
        </div>
        <div className="pt-8 pb-4">
          <h3 className="text-xl font-bold tracking-tight overflow-y-scroll">
            Gathering as Organizer
          </h3>
          <div className="py-6">
            <MainButton
              text="New Gathering"
              linkUrl={`/admin/${1}/newGathering`}
            />
          </div>
          <div className="">
            <span
              onClick={() => {
                signOut();
              }}
            >
              <GithubAuthButton text="Sign out" />
            </span>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default AdminHome;

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const adminId = params!.adminId;

  const currAdmin = "aa";
  return {
    props: {
      currAdmin,
    },
  };
};

export async function getStaticPaths() {
  //   const paths = "aa";
  return {
    paths: [{ params: { adminId: "1" } }, { params: { adminId: "2" } }],
    fallback: false,
  };
}
