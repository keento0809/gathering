import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { server } from "../../../../config/index";
import NewGatheringPage from "../../../../components/pages/admin/NewGatheringPage";
import Meta from "../../../../meta/Meta";
import { AdminUserProps } from "../../../../types/admin";

const NewGathering = ({ currentUser }: AdminUserProps) => {
  return (
    <>
      <Meta title={"Create New Gathering"} />
      <NewGatheringPage currentUser={currentUser} />
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
