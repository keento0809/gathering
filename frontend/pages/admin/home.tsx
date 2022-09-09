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
import { adminUserProps } from "../../models/model";

const AdminHome = () => {
  const { data: session } = useSession();

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
              <h3 className="text-3xl text-red-500 font-bold tracking-tight">
                Hello, {session.user?.name}!
              </h3>
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

  return {
    props: {
      session,
    },
  };
};
