import React from "react";
import Button from "../Button/Button";

const CreateGatheringForm = () => {
  const handleChange = () => {
    console.log("change!");
  };
  const handleSubmit = () => {
    console.log("submit!");
  };
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
              // className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
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
            <span className="text-sm">140 words</span>
          </div>

          <div className="relative">
            <textarea
              rows={3}
              name="date"
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
              name="number"
              id="number"
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
            Place LatLng (temporary)
          </label>
          <div className="relative">
            <input
              type="text"
              name="placeLatLng"
              id="placeLatLng-icon"
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
              placeholder="Waves Coffee"
              required={true}
            />
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