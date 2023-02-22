import { GatheringProps } from "../../types/gathering";
import MapWithMarker from "../Map/MapWithMarker";

const CompleteBookingList = ({ gathering }: GatheringProps) => {
  const { date, schedule, placeName, placeLatLng, specialNotes, organizer } =
    gathering;

  return (
    <>
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
            Name: <span className="font-semibold">{organizer.username}</span>{" "}
            <br />
            Email: <span className="font-semibold">{organizer.email}</span>
          </div>
        </li>
      </ul>
      <section className="google-map py-2">
        <div className="pt-2">
          <MapWithMarker placeLatLng={placeLatLng} placeName={placeName} />
        </div>
      </section>
    </>
  );
};

export default CompleteBookingList;
