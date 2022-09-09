import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import { server } from "../../config/index";
import { GatheringType, adminUserProps } from "../../models/model";
import { getSession, useSession } from "next-auth/react";
import TestMap from "../Map/TestMap";
import { useMapContext } from "../../context/MapContext";

const CreateGatheringForm = ({ currentUser }: adminUserProps) => {
  const mapCtx = useMapContext();
  const { data: session } = useSession();
  const [wordCount, setWordCount] = useState(140);
  const [gatheringInfo, setGatheringInfo] = useState<GatheringType>({
    _id: null,
    title: "",
    image: "",
    headline: "",
    description: "",
    capacity: 0,
    date: "",
    schedule: "",
    timeSchedule: "",
    placeName: "",
    placeLatLng: mapCtx!.center,
    isFull: false,
    participants: [],
    specialNotes: "",
    organizer: {
      id: null,
      username: "",
      email: "",
      hostGathering: [],
    },
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const bodyObj = gatheringInfo;
    // test
    const bodyObj = { ...gatheringInfo, placeLatLng: mapCtx!.center };

    const res = await fetch(`${server}/api/gatherings`, {
      method: "POST",
      body: JSON.stringify(bodyObj),
    });
    const data = await res.json();
    console.log("submit!", data);
  };

  useEffect(() => {
    // add a function finding hostGathering
    console.log({ session });
    setGatheringInfo({
      ...gatheringInfo,
      organizer: currentUser && currentUser,
    });
  }, []);

  console.log(mapCtx!.center);
  // console.log(gatheringInfo, ": 何科かわった");

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label
            htmlFor="title-icon"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Title
          </label>
          <div className="relative">
            <input
              type="text"
              name="title"
              id="title-icon"
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
              placeholder="Title"
              required={true}
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="image-icon"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
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
              placeholder="Title"
              required={true}
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="date-icon"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Date
          </label>
          <div className="relative">
            <input
              type="date"
              name="date"
              id="date-icon"
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
              placeholder=""
              required={true}
            />
          </div>
        </div>
        <div className="mb-6">
          <div className="flex flex-row justify-between">
            <label
              htmlFor="headline-icon"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
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
              className="bg-gray-50 border resize-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
              placeholder=""
              required={true}
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="description-icon"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Description
          </label>

          <div className="relative">
            <textarea
              rows={8}
              name="description"
              id="description-icon"
              onChange={handleChange}
              className="bg-gray-50 border resize-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
              placeholder=""
              required={true}
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="number"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
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
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
              placeholder="Enter number from 2 to 200"
              required={true}
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="schedule-icon"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Schedule
          </label>
          <div className="relative">
            <input
              type="text"
              name="schedule"
              id="schedule-icon"
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
              placeholder="09:00~12:00"
              required={true}
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="timeSchedule-icon"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Time Schedule
          </label>

          <div className="relative">
            <textarea
              rows={6}
              name="timeSchedule"
              id="timeSchedule-icon"
              onChange={handleChange}
              className="bg-gray-50 border resize-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
              placeholder=""
              required={true}
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="placeName-icon"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Place name
          </label>
          <div className="relative">
            <input
              type="text"
              name="placeName"
              id="placeName-icon"
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
              placeholder="Waves Coffee"
              required={true}
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="placeLatLng-icon"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Location (Please click or tap the place in the map)
          </label>
          <div className="relative">
            <TestMap />
            {/* <input
              type="text"
              name="placeLatLng"
              id="placeLatLng-icon"
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
              placeholder="Waves Coffee"
              required={true}
            /> */}
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="specialNotes-icon"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Special Notes
          </label>

          <div className="relative">
            <textarea
              rows={3}
              name="specialNotes"
              id="specialNotes-icon"
              onChange={handleChange}
              className="bg-gray-50 border resize-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
              placeholder=""
              required={true}
            />
          </div>
        </div>
        <div className="py-6 text-white text-sm">
          After filling out all inputs above, please push{" "}
          <span className="font-bold text-red-500 cursor-pointer">
            Create
            {/* <Link href="/auth/signup">Signup</Link>{" "} */}
          </span>{" "}
          button, then your new gathering will be created successfully and added
          to the upcoming gathering list.
        </div>
        <div className="pb-6">
          <Button text="Create" />
        </div>
      </form>
    </>
  );
};

export default CreateGatheringForm;
