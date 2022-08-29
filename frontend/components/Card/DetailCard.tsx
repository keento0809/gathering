import React from "react";

const DetailCard = () => {
  return (
    <div className="rounded-xl bg-slate-400 max-h-580 p-6 mt-6 overflow-scroll">
      <section className="image">
        <img
          src="https://images.unsplash.com/photo-1573164574511-73c773193279?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
          alt=""
          width="100%"
          className="rounded-md mb-2"
        />
      </section>
      <section className="description py-2">
        <h3 className="text-lg font-bold tracking-tight">Description</h3>
        <p className="text-base pt-2">
          In this event, besides you can work on whatever you want, you can
          interact with digital marketing specialist who can give you lots of
          tips related to marketing fields.
        </p>
      </section>
      <section className="info py-2">
        <h3 className="text-lg font-bold tracking-tight">Info</h3>
        <ul className="pt-2 text-base">
          <li className="pb-1">Date: 2022/09/01</li>
          <li className="pb-1">Time: 09:00AM - 12:00AM</li>
          <li className="pb-1">Place: Waves Coffee - Kingsway -</li>
          <li className="pb-1">
            Participants: <span className="text-red-500">5 members</span> coming
          </li>
          <li className="pb-1">Organizer: Joe Doe</li>
        </ul>
      </section>
      <section className="schedule py-2">
        <h3 className="text-lg font-bold tracking-tight">Schedule</h3>
        <table className="pt-2 text-base">
          <th>
            <td className="font-normal">Time</td>
            <td className="font-normal">Agenda</td>
          </th>
          <tr className="">
            <td>09:00</td>
            <td>Start</td>
          </tr>
          <tr className="">
            <td>09:00~10:00</td>
            <td>First session</td>
          </tr>
          <tr className="">
            <td>09:00~10:00</td>
            <td>First session</td>
          </tr>
          <tr className="">
            <td>10:00~10:20</td>
            <td>Short break</td>
          </tr>
          <tr className="">
            <td>10:20~11:40</td>
            <td>Second session</td>
          </tr>
          <tr className="">
            <td>11:40~12:00</td>
            <td>QA session</td>
          </tr>
          <tr className="">
            <td>12:00</td>
            <td>Finish</td>
          </tr>
        </table>
      </section>
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
          Please bring your own PC. Participants have to buy at least one drink
          at the place.
        </p>
      </section>
    </div>
  );
};

export default DetailCard;
