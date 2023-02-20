import Head from "next/head";
import { getSession, useSession } from "next-auth/react";
import { GetServerSideProps } from "next";
import { server } from "../../config";
import { adminUserInfoObjType, GatheringType } from "../../models/model";
import AdminHomeContainer from "../../features/admin/AdminHomeContainer";

interface DataPropsAtAdminHome {
  data: { hostGatherings: GatheringType[]; currUser: adminUserInfoObjType };
}

const AdminHome = ({ data }: DataPropsAtAdminHome) => {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>Admin {session ? "home" : "login"}</title>
      </Head>
      <AdminHomeContainer data={data} />
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
