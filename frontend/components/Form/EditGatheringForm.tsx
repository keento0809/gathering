import { useState } from "react";
import TestMap from "../Map/TestMap";
import Button from "../Button/Button";
import { GatheringProps, GatheringType } from "../../types/gathering";
import { server } from "../../config";

const EditGatheringForm = ({ gathering }: GatheringProps) => {
  const {
    _id,
    title,
    image,
    headline,
    description,
    capacity,
    date,
    schedule,
    timeSchedule,
    placeName,
    placeLatLng,
    isFull,
    participants,
    specialNotes,
    organizer,
  } = gathering;
  const [wordCount, setWordCount] = useState(140);
  const [gatheringInfo, setGatheringInfo] = useState<GatheringType>({
    _id: _id,
    title,
    image,
    headline,
    description,
    capacity,
    date,
    schedule,
    timeSchedule,
    placeName,
    placeLatLng,
    isFull,
    participants,
    specialNotes,
    organizer,
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.target.name === "headline") {
      setWordCount(140 - e.target.value.length);
    }
    setGatheringInfo({
      ...gatheringInfo,
      [e.target.name]: e.target.value,
    });
  };
  const handleDeleteParticipant = async (username: string, email: string) => {
    const updatedParticipants = gathering.participants.filter(
      (participant) =>
        participant.username !== username && participant.email !== email
    );
    try {
      await fetch(`${server}/api/gatherings/${gathering._id}/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedParticipants),
      });
      const res = await fetch(`${server}/api/gatherings/${gathering._id}`);
      const updatedGathering = await res.json();
      setGatheringInfo(updatedGathering);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = () => {
    console.log("submit");
  };
  return (
    <div className="md:max-w-500 md:mx-auto">
      <div className="mb-12">
        <span className="block mb-2 text-sm font-medium text-textPrimary dark:text-gray-300">
          Participants
        </span>
        <ul className="border border-red-500 py-4 rounded-lg">
          {gatheringInfo.participants.length > 0 &&
            gatheringInfo.participants.map((participant, index) => {
              const { username, email } = participant;
              return (
                <li key={index} className="pb-1 pl-4 list-none">
                  <span className="inline-block min-w-140">
                    {index + 1}. {username}
                  </span>
                  <button
                    onClick={() => handleDeleteParticipant(username, email)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </li>
              );
            })}
          {gatheringInfo.participants.length === 0 && (
            <p className="pb-1 pl-4">No participants found.</p>
          )}
        </ul>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-12">
          <label
            htmlFor="title-icon"
            className="block mb-2 text-sm font-medium text-textPrimary dark:text-gray-300"
          >
            Title
          </label>
          <div className="relative">
            <input
              type="text"
              name="title"
              id="title-icon"
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-textPrimary text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
              defaultValue={title}
              required={true}
            />
          </div>
        </div>
        <div className="mb-12">
          <label
            htmlFor="image-icon"
            className="block mb-2 text-sm font-medium text-textPrimary dark:text-gray-300"
          >
            Image
          </label>
          <div className="relative">
            <input
              type="file"
              name="image"
              id="image-icon"
              onChange={handleChange}
              accept="image/png,image/jpeg"
              required={true}
            />
          </div>
        </div>
        <div className="mb-12">
          <label
            htmlFor="date-icon"
            className="block mb-2 text-sm font-medium text-textPrimary dark:text-gray-300"
          >
            Date
          </label>
          <div className="relative">
            <input
              type="date"
              name="date"
              id="date-icon"
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-textPrimary text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
              defaultValue={date}
              required={true}
            />
          </div>
        </div>
        <div className="mb-12">
          <div className="flex flex-row justify-between">
            <label
              htmlFor="headline-icon"
              className="block mb-2 text-sm font-medium text-textPrimary dark:text-gray-300"
            >
              Headline (in 140 words)
            </label>
            <span className="text-sm">{wordCount} words left</span>
          </div>

          <div className="relative">
            <textarea
              rows={3}
              name="headline"
              id="headline-icon"
              onChange={handleChange}
              className="bg-gray-50 border resize-none border-gray-300 text-textPrimary text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
              defaultValue={headline}
              required={true}
            />
          </div>
        </div>
        <div className="mb-12">
          <label
            htmlFor="description-icon"
            className="block mb-2 text-sm font-medium text-textPrimary dark:text-gray-300"
          >
            Description
          </label>

          <div className="relative">
            <textarea
              rows={8}
              name="description"
              id="description-icon"
              onChange={handleChange}
              className="bg-gray-50 border resize-none border-gray-300 text-textPrimary text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
              defaultValue={description}
              required={true}
            />
          </div>
        </div>
        <div className="mb-12">
          <label
            htmlFor="number"
            className="block mb-2 text-sm font-medium text-textPrimary dark:text-gray-300"
          >
            Capacity (2 ~ 200)
          </label>
          <div className="relative">
            <input
              type="number"
              name="capacity"
              id="capacity"
              onChange={handleChange}
              min={2}
              max={200}
              className="bg-gray-50 border border-gray-300 text-textPrimary text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
              defaultValue={capacity}
              required={true}
            />
          </div>
        </div>

        <div className="mb-12">
          <label
            htmlFor="schedule-icon"
            className="block mb-2 text-sm font-medium text-textPrimary dark:text-gray-300"
          >
            Schedule
          </label>
          <div className="relative">
            <input
              type="text"
              name="schedule"
              id="schedule-icon"
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-textPrimary text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
              defaultValue={schedule}
              required={true}
            />
          </div>
        </div>
        <div className="mb-12">
          <label
            htmlFor="timeSchedule-icon"
            className="block mb-2 text-sm font-medium text-textPrimary dark:text-gray-300"
          >
            Time Schedule
          </label>

          <div className="relative">
            <textarea
              rows={6}
              name="timeSchedule"
              id="timeSchedule-icon"
              onChange={handleChange}
              className="bg-gray-50 border resize-none border-gray-300 text-textPrimary text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
              defaultValue={timeSchedule}
              required={true}
            />
          </div>
        </div>
        <div className="mb-12">
          <label
            htmlFor="placeName-icon"
            className="block mb-2 text-sm font-medium text-textPrimary dark:text-gray-300"
          >
            Place name
          </label>
          <div className="relative">
            <input
              type="text"
              name="placeName"
              id="placeName-icon"
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-textPrimary text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
              defaultValue={placeName}
              required={true}
            />
          </div>
        </div>
        <div className="mb-12">
          <label
            htmlFor="placeLatLng-icon"
            className="block mb-2 text-sm font-medium text-textPrimary dark:text-gray-300"
          >
            Location (Please click or tap the place in the map)
          </label>
          <div className="relative">
            <TestMap />
          </div>
        </div>
        <div className="mb-12">
          <label
            htmlFor="specialNotes-icon"
            className="block mb-2 text-sm font-medium text-textPrimary dark:text-gray-300"
          >
            Special Notes
          </label>

          <div className="relative">
            <textarea
              rows={3}
              name="specialNotes"
              id="specialNotes-icon"
              onChange={handleChange}
              className="bg-gray-50 border resize-none border-gray-300 text-textPrimary text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
              defaultValue={specialNotes}
              required={true}
            />
          </div>
        </div>
        <div className="py-6 text-textPrimary text-sm">
          Please make sure all inputs are filled out before updating gathering.
        </div>
        <div className="pb-6">
          <Button text="Update" />
        </div>
      </form>
    </div>
  );
};

export default EditGatheringForm;
