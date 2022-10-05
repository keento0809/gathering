import Head from "next/head";
import React, { useEffect, useState } from "react";
import Wrapper from "../../components/Wrapper/Wrapper";
import MainButton from "../../components/Button/MainButton";
import { getSession, useSession } from "next-auth/react";
import GithubAuthButton from "../../components/Button/GithubAuthButton";
import { signOut, signIn } from "next-auth/react";
import Card from "../../components/Card/Card";
import Link from "next/link";
import { GetServerSideProps } from "next";
import { server } from "../../config";
import {
  adminUserInfoObjType,
  adminUserProps,
  GatheringsArrayType,
  GatheringType,
} from "../../models/model";
import GatheringsList from "../../components/List/GatheringsList";

interface DataPropsAtAdminHome {
  data: { hostGatherings: GatheringType[]; currUser: adminUserInfoObjType };
}

const AdminHome = ({ data }: DataPropsAtAdminHome) => {
  const { data: session } = useSession();
  const { hostGatherings, currUser } = data;
  const adminId = currUser.id;

  return (
    <>
      <Head>
        <title>Admin Home</title>
      </Head>
      <Wrapper>
        <div className="home-title">
          {!session && (
            <div>
              <h2 className="text-2xl font-bold text-center tracking-tight text-red-500 dark:text-red-400">
                Admin Authentication
              </h2>
              <Card>
                <div className="text-center pt-4">
                  {!session && (
                    <div className="text-center text-base">
                      <p>Please log in with GitHub below.</p>
                      <div className="text-center pt-6">
                        <Link href={"/admin/home"}>
                          <a
                            onClick={(e) => {
                              e.preventDefault();
                              signIn("github");
                            }}
                          >
                            <GithubAuthButton text="Login with GitHub" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            </div>
          )}
          {session && (
            <div>
              <h3 className="text-3xl text-red-500 lg:text-center font-bold tracking-tight">
                Hello, {session.user?.name}!
              </h3>
              <div className="pt-8 pb-4 max-h-700 overflow-scroll">
                <div className="">
                  <h3 className="text-xl lg:text-center font-bold tracking-tight overflow-y-scroll">
                    Gatherings as Organizer ({hostGatherings.length})
                  </h3>
                  <GatheringsList data={hostGatherings} />
                </div>
                <div className="py-6">
                  <h3 className="text-xl pb-4 font-bold tracking-tight overflow-y-scroll">
                    Host New Gathering
                  </h3>
                  <MainButton
                    text="Create"
                    linkUrl={`/admin/${adminId}/newGathering`}
                  />
                </div>
                <div className="pb-6">
                  <Link href={"/admin/home"}>
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                        signOut();
                      }}
                    >
                      <GithubAuthButton text="Sign out" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </Wrapper>
    </>
  );
};

export default AdminHome;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  const response = await fetch(`${server}/api/gatherings`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const allGatherings = await response.json();
  const hostGatherings = allGatherings.filter(
    (data: GatheringType) => data.organizer.username === session?.user?.name
  );
  const res = await fetch(`${server}/api/getUser`);
  const currUser = await res.json();
  return {
    props: {
      session,
      data: { hostGatherings, currUser },
    },
  };
};
