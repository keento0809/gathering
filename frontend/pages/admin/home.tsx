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
import { adminUserInfoObjType, GatheringType } from "../../models/model";
import GatheringsList from "../../components/List/GatheringsList";

interface DataPropsAtAdminHome {
  data: { hostGatherings: GatheringType[]; currUser: adminUserInfoObjType };
}

const AdminHome = ({ data }: DataPropsAtAdminHome) => {
  const { data: session } = useSession();
  const { hostGatherings, currUser } = data;
  const adminId = currUser._id;

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
              <div className="flex flex-row items-center justify-between lg:justify-center">
                <h3 className="text-2xl text-red-500 lg:text-center font-bold tracking-tight">
                  Hello, {session.user?.name}!
                </h3>
                <Link href={"/admin/home"}>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      signOut();
                    }}
                    className="inline-block pr-2 lg:hidden"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                      />
                    </svg>
                  </a>
                </Link>
              </div>
              <div className="pt-8 pb-4 max-h-700 overflow-scroll">
                <div className="">
                  <h3 className="text-xl lg:pb-2 lg:text-center font-bold tracking-tight overflow-y-scroll">
                    Gatherings as Organizer ({hostGatherings.length})
                  </h3>
                  <GatheringsList data={hostGatherings} />
                </div>
                <div className="pb-6">
                  <div className="fixed z-40 bottom-16 right-10 inline-block p-4 text-white bg-red-500 hover:bg-red-600 hover:scale-105 transition-all cursor-pointer rounded-full">
                    <Link href={`/admin/${adminId}/newGathering`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-8 h-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                    </Link>
                  </div>
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
