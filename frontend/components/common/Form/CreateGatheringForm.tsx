import { useState, useEffect } from "react";
import Button from "../Button/Button";
import { server } from "../../../config/index";
import { GatheringType } from "../../../types/gathering";
import { AdminUserProps } from "../../../types/admin";
import BasicMap from "../Map/BasicMap";
import { useMapContext } from "../../context/MapContext";
import { useRouter } from "next/router";
import getTodayString from "../../../helpers/getTodayString";
import { setGatheringImage } from "../../../helpers/updateGatheringImage";

const CreateGatheringForm = ({ currentUser }: AdminUserProps) => {
  const router = useRouter();
  const mapCtx = useMapContext();
  const [isDateExpired, setIsDateExpired] = useState<Boolean>(false);
  const [wordCount, setWordCount] = useState<number>(100);
  const [file, setFile] = useState<File>();
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
      setWordCount(100 - e.target.value.length);
    }
    // Validation to prevent admin users to create new gatherings with past dates
    if (e.target.name === "date") {
      let today = new Date();
      const todayString = getTodayString();
      todayString > e.target.value
        ? setIsDateExpired(true)
        : setIsDateExpired(false);
    }
    setGatheringInfo({
      ...gatheringInfo,
      [e.target.name]: e.target.value,
    });
  };
  const handleSetFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      console.error("Select a file");
      return;
    }
    setFile(e.target.files[0]);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const bodyObj = { ...gatheringInfo, placeLatLng: mapCtx!.center };

    const res = await fetch(`${server}/api/gatherings`, {
      method: "POST",
      body: JSON.stringify(bodyObj),
    });
    router.replace("/admin/home");
  };
  useEffect(() => {
    setGatheringInfo({
      ...gatheringInfo,
      organizer: currentUser && currentUser,
    });
    const selectedImage = setGatheringImage();
    gatheringInfo.image = selectedImage;
  }, []);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="create_gathering md:max-w-500 md:mx-auto"
      >
        <div className="mb-6">
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
              placeholder="Title"
              required={true}
            />
          </div>
        </div>
        <div className="mb-6">
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
              className={`bg-gray-50 border border-gray-300 text-textPrimary text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 ${
                isDateExpired && "border-red-500"
              }`}
              placeholder=""
              required={true}
            />
          </div>
          {isDateExpired && (
            <div className="text-sm text-primary py-2 pl-3">
              <span>Invalid date. Date must not be the past.</span>
            </div>
          )}
        </div>
        <div className="mb-6">
          <div className="flex flex-row justify-between">
            <label
              htmlFor="headline-icon"
              className="block mb-2 text-sm font-medium text-textPrimary dark:text-gray-300"
            >
              Headline (in 100 words)
            </label>
            <span className={`text-sm ${wordCount < 0 && "text-primary"}`}>
              {wordCount} words left
            </span>
          </div>
          {wordCount < 0 && (
            <div className="text-sm text-primary pb-2">
              <span>Words in headline must be in 100 words.</span>
            </div>
          )}

          <div className="relative">
            <textarea
              rows={3}
              name="headline"
              id="headline-icon"
              onChange={handleChange}
              className="bg-gray-50 border resize-none border-gray-300 text-textPrimary text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
              placeholder="Fill out headline within 100 words"
              required={true}
            />
          </div>
        </div>
        <div className="mb-6">
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
              placeholder="Fill out description here"
              required={true}
            />
          </div>
        </div>
        <div className="mb-6">
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
              placeholder="Enter number from 2 to 200"
              required={true}
            />
          </div>
        </div>
        <div className="mb-6">
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
              placeholder="09:00~12:00"
              required={true}
            />
          </div>
        </div>
        <div className="mb-6">
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
              placeholder="09:00~10:00 Lecture"
              required={true}
            />
          </div>
        </div>
        <div className="mb-6">
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
              placeholder="Waves Coffee"
              required={true}
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="placeLatLng-icon"
            className="block mb-2 text-sm font-medium text-textPrimary dark:text-gray-300"
          >
            Location (Please click or tap the place in the map)
          </label>
          <div className="relative">
            <BasicMap />
          </div>
        </div>
        <div className="mb-6">
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
              placeholder="Fill out special notes here"
              required={true}
            />
          </div>
        </div>
        <div className="py-6 text-textPrimary text-sm">
          After filling out all inputs above, please push{" "}
          <span className="font-bold text-primary cursor-pointer">Create</span>{" "}
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
