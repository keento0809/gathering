import Head from "next/head";
import Card from "../../../components/Card/Card";
import ApplicationForm from "../../../components/Form/ApplicationForm";
import { GetServerSideProps } from "next";
import { server } from "../../../config";
import { GatheringProps } from "../../../models/model";
import { useEffect } from "react";
import { useLoadingContext } from "../../../context/LoadingContext";

const ApplicationPage = ({ gathering }: GatheringProps) => {
  const { isLoading, setIsLoading } = useLoadingContext();

  useEffect(() => {
    isLoading && setIsLoading(false);
  }, []);
  return (
    <>
      <Head>
        <title>Application</title>
      </Head>
      <div>
        <h2 className="text-2xl font-bold tracking-tighter text-center text-primary">
          Book gathering
        </h2>
        <p className="text-sm pt-8 px-2 md:max-w-580 md:mx-auto">
          Please fill out your information to join the gathering. After pushing
          the confirm button, your booking will be secured immediately.
        </p>
        <Card>
          <ApplicationForm gathering={gathering} />
        </Card>
      </div>
    </>
  );
};

export default ApplicationPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  const gatheringId = params!["gatheringId"];
  const response = await fetch(`${server}/api/gatherings/${gatheringId}`);
  const gathering = await response.json();
  return {
    props: {
      gathering,
    },
  };
};
