import React from "react";
import Card from "./Card";
import { GatheringProps } from "../../models/model";

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
          </li>
          <li className="pb-1">Organizer: Joe Doe</li>
        </ul>
      </section>
      {/* temporary */}
      {/* <section className="schedule py-2">
        <h3 className="text-lg font-bold tracking-tight">Schedule</h3>
        <div className="pt-2">
          {gathering.timeSchedule}
        </div>
      </section> */}
      <section className="google-map py-2">
        <h3 className="text-lg font-bold tracking-tight">Map</h3>
        <iframe
          className="pt-3 rounded-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.3675461750036!2d-123.01187218441837!3d49.231520382315495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548676f43b1c4d09%3A0x466206b57e209b12!2sWaves%20Coffee%20House%20-%20Kingsway!5e0!3m2!1sen!2sca!4v1661732255709!5m2!1sen!2sca"
          width="100%"
          height="200"
          style={{ border: "0" }}
          // allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
      <section className="specialNotes py-2">
        <h3 className="text-lg font-bold tracking-tight">Notes</h3>
        <p className="text-base py-2">
          {gathering.specialNotes}
          {/* Please bring your own PC. Participants have to buy at least one drink
          at the place. */}
        </p>
      </section>
    </Card>
  );
};

export default DetailCard;
