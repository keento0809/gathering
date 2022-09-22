import React, { useState } from "react";
import Card from "./Card";
import { GatheringProps } from "../../models/model";
import MapWithMarker from "../Map/MapWithMarker";

const DetailCard = ({ gathering }: GatheringProps) => {
  return (
    <Card>
      <section className="image">
        <img
          src={gathering.image}
          alt=""
          width="100%"
          className="rounded-md mb-2"
        />
      </section>
      <section className="description py-2">
        <h3 className="text-lg font-bold tracking-tight">Description</h3>
        <p className="text-base pt-2">{gathering.description}</p>
      </section>
      <section className="info py-2">
        <h3 className="text-lg font-bold tracking-tight">Info</h3>
        <ul className="pt-2 text-base">
          <li className="pb-1">Date: {gathering.date}</li>
          <li className="pb-1">Time: {gathering.schedule}</li>
          <li className="pb-1">Place: {gathering.placeName}</li>
          <li className="pb-1">Capacity: {gathering.capacity} members</li>
          <li className="pb-1">
            Participants:{" "}
            <span className="text-red-500">
              {gathering.participants.length} members
            </span>{" "}
            coming
            {gathering.participants.length > 0 && (
              <div className="border border-red-500 my-4 py-4 rounded-lg">
                {gathering.participants.map((participant, index) => {
                  return (
                    <div className="flex justify-center" key={index}>
                      <p className="min-w-300">
                        Name: {participant.username}
                        <span className="pl-4">({participant.twitterId})</span>
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
          </li>
          <li className="pb-1">Organizer: {gathering.organizer.username}</li>
        </ul>
      </section>
      {/* temporary */}
      <section className="schedule py-2">
        <h3 className="text-lg font-bold tracking-tight">Schedule</h3>
        <div className="pt-2">{gathering.timeSchedule}</div>
      </section>
      <section className="google-map py-2">
        <h3 className="text-lg font-bold tracking-tight">Map</h3>
        <div className="pt-2">
          <MapWithMarker
            placeLatLng={gathering.placeLatLng}
            placeName={gathering.placeName}
          />
        </div>
      </section>
      <section className="specialNotes py-2">
        <h3 className="text-lg font-bold tracking-tight">Notes</h3>
        <p className="text-base py-2">{gathering.specialNotes}</p>
      </section>
    </Card>
  );
};

export default DetailCard;
