import Head from "next/head";
import Wrapper from "../../../components/Wrapper/Wrapper";
import Card from "../../../components/Card/Card";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import EditGatheringForm from "../../../components/Form/EditGatheringForm";
import { server } from "../../../config";
import { GatheringProps } from "../../../models/model";
import MainButton from "../../../components/Button/MainButton";

const Manage = ({ gathering }: GatheringProps) => {
  return (
    <>
      <Head>
        <title>Manage</title>
      </Head>
      <Wrapper>
        <h2 className="text-2xl text-center font-bold tracking-tighter text-primary">
          Manage Gathering
        </h2>
        <Card>
          <EditGatheringForm gathering={gathering} />
        </Card>
        <div className="text-center pt-6">
          <MainButton text="Back" linkUrl={`/admin/home`} />
        </div>
      </Wrapper>
    </>
  );
};

export default Manage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  const { params } = context;
  const gatheringId = params!["gatheringId"];
  const response = await fetch(`${server}/api/gatherings/${gatheringId}`);
  const gathering = await response.json();

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
      gathering,
    },
  };
};
