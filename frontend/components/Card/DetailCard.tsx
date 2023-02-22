import { Fragment } from "react";
import Card from "./Card";
import { GatheringProps } from "../../types/gathering";
import MapWithMarker from "../Map/MapWithMarker";
import Link from "next/link";

const DetailCard = ({ gathering }: GatheringProps) => {
  const schedule = gathering.timeSchedule.split(/\s+/g);

  return (
    <Card>
      <div className="lg:max-w-800 lg:mx-auto grid md:grid-cols-2">
        <section className="image bg-red-400 min-h-236">
          <img
            src={gathering.image}
            alt=""
            width="100%"
            style={{ height: "236px" }}
          />
        </section>
        <section className="description p-4 bg-white min-h-236">
          <h3 className="text-lg font-bold tracking-tight">Description</h3>
          <p className="text-base pt-2">{gathering.description}</p>
        </section>
        <section className="info p-4 bg-red-400 md:bg-white min-h-236">
          <h3 className="text-lg font-bold tracking-tight">Info</h3>
          <ul className="pt-2 text-base">
            <li className="pb-1">Date: {gathering.date}</li>
            <li className="pb-1">Time: {gathering.schedule}</li>
            <li className="pb-1">Place: {gathering.placeName}</li>
            <li className="pb-1">Capacity: {gathering.capacity} members</li>
            <li className="pb-1">
              Participants:{" "}
              <span className="text-slate-200 md:text-primary">
                {gathering.participants.length} members
              </span>{" "}
              coming
              {gathering.participants.length > 0 && (
                <div className="border border-red-500 my-4 py-4 rounded-lg">
                  {gathering.participants.map((participant, index) => {
                    return (
                      <div className="pl-4" key={index}>
                        <span className="inline-block min-w-140">
                          Name: {participant.username}
                        </span>
                        <Link
                          href={`https://twitter.com/${participant.twitterId}`}
                          className="pl-4 inline-block hover:text-primary"
                          passHref
                        >
                          <a
                            className="hover:text-primary cursor-pointer"
                            target={"_blank"}
                          >
                            @{participant.twitterId}
                          </a>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              )}
            </li>
            <li className="pb-1">Organizer: {gathering.organizer.username}</li>
          </ul>
        </section>
        <section className="schedule p-4 bg-white md:bg-red-400 min-h-236">
          <h3 className="text-lg font-bold tracking-tight">Schedule</h3>
          <div className="pt-2">
            {schedule?.map((item, index) =>
              Number(schedule[index + 1]?.substring(0, 1)) ? (
                <Fragment key={index}>
                  <span> {item}</span>
                  <br />
                </Fragment>
              ) : (
                <span
                  key={index}
                  className={
                    Number(item.substring(0, 1)) ? "inline-block min-w-100" : ""
                  }
                >
                  {" "}
                  {item}
                </span>
              )
            )}
          </div>
        </section>
        <section className="google-map bg-red-400">
          <div className="">
            <MapWithMarker
              placeLatLng={gathering.placeLatLng}
              placeName={gathering.placeName}
            />
          </div>
        </section>
        <section className="specialNotes p-4 bg-white min-h-236">
          <h3 className="text-lg font-bold tracking-tight">Notes</h3>
          <p className="text-base py-2">{gathering.specialNotes}</p>
        </section>
      </div>
    </Card>
  );
};

export default DetailCard;
