import { GetServerSideProps } from "next";
import Head from "next/head";
import MainButton from "../../../components/Button/MainButton";
import Card from "../../../components/Card/Card";
import Wrapper from "../../../components/Wrapper/Wrapper";
import { server } from "../../../config";
import { GatheringProps } from "../../../models/model";
import MapWithMarker from "../../../components/Map/MapWithMarker";

const Completion = ({ gathering }: GatheringProps) => {
  const { date, schedule, placeName, placeLatLng, specialNotes, organizer } =
    gathering;
  return (
    <>
      <Head>
        <title>Complete</title>
      </Head>
      <Wrapper>
        <h2 className="text-2xl text-center font-bold tracking-tighter text-primary">
          Confirmed!
        </h2>
        <Card>
          <div className="pt-2">
            <p className="text-lg font-bold tracking-tight">
              Your booking has been secured!
            </p>
            <p className="text-sm text-gray-700 font-normal tracking-tight pt-1">
              Please check the details below.
            </p>
          </div>
          {/* I'll replace to one UI component later */}
          <div className="pt-14 pb-8">
            <ul className="pt-2 text-base">
              <li className="pb-6">
                Date: <span className="font-semibold">{date}</span>
              </li>
              <li className="pb-6">
                Time: <span className="font-semibold">{schedule}</span>
              </li>
              <li className="pb-6">
                Place: <span className="font-semibold">{placeName}</span>
              </li>
              <li className="pb-6">Special Note: {specialNotes}</li>
              <li className="pb-6">
                Organizer: <br />
                <div className="pt-4">
                  Name:{" "}
                  <span className="font-semibold">{organizer.username}</span>{" "}
                  <br />
                  Email:{" "}
                  <span className="font-semibold">{organizer.email}</span>
                </div>
              </li>
            </ul>
            <section className="google-map py-2">
              <div className="pt-2">
                <MapWithMarker
                  placeLatLng={placeLatLng}
                  placeName={placeName}
                />
              </div>
            </section>
          </div>
        </Card>
        <div className="text-center pt-8">
          <MainButton text="Home" linkUrl="/home" />
        </div>
      </Wrapper>
      ;
    </>
  );
};

export default Completion;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  const gatheringId = params!["gatheringId"];
  const response = await fetch(`${server}/api/gatherings/${gatheringId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const gathering = await response.json();
  return {
    props: {
      gathering,
    },
  };
};
