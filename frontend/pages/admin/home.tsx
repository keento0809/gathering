import { getSession, useSession } from "next-auth/react";
import { GetServerSideProps } from "next";
import { server } from "../../config";
import { GatheringType } from "../../types/gathering";
import { AdminUser } from "../../types/admin";
import AdminHomeContainer from "../../features/admin/AdminHomeContainer";
import Meta from "../../meta/Meta";

interface DataPropsAtAdminHome {
  data: { hostGatherings: GatheringType[]; currUser: AdminUser };
}

const AdminHome = ({ data }: DataPropsAtAdminHome) => {
  const { data: session } = useSession();

  return (
    <>
      <Meta title={`Admin ${session ? "home" : "login"}`} />
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
