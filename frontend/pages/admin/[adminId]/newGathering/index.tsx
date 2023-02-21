import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { server } from "../../../../config/index";
import NewGatheringContainer from "../../../../features/admin/newGatheringContainer";
import Meta from "../../../../meta/Meta";
import { adminUserProps } from "../../../../models/model";

const NewGathering = ({ currentUser }: adminUserProps) => {
  return (
    <>
      <Meta title={"Create New Gathering"} />
      <NewGatheringContainer currentUser={currentUser} />
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
