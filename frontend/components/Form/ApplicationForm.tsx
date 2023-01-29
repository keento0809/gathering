import { useState } from "react";
import Button from "../Button/Button";
import { useRouter } from "next/router";
import { server } from "../../config";
import { init, send } from "@emailjs/browser";
import { GatheringProps } from "../../models/model";

const ApplicationForm = ({ gathering }: GatheringProps) => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    twitterId: "",
  });
  const gatheringId = gathering._id;
  const router = useRouter();
  const userID = process.env.NEXT_PUBLIC_USER_ID!;
  const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID!;
  const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID!;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch(`${server}/api/gatherings/${gatheringId}`);
    const updatingGathering = await res.json();
    updatingGathering.participants.push(userInfo);
    const newParticipants = updatingGathering.participants;
    await fetch(`${server}/api/gatherings/${gatheringId}/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newParticipants),
    });
    if (userID && serviceID && templateID) {
      const { username, email, twitterId } = userInfo;
      const { title, date, schedule, placeName, specialNotes, organizer } =
        gathering;
      init(userID);
      const template_params = {
        organizer_email: organizer.email,
        organizer_name: organizer.username,
        user_name: username,
        user_email: email,
        gathering_name: title,
        gathering_date: date,
        gathering_time: schedule,
        gathering_place: placeName,
        gathering_note: specialNotes,
      };
      // send email
      send(serviceID, templateID, template_params)
        .then()
        .catch((err) => console.log(err));
      router.replace(`/gatherings/${gatheringId}/completion`);
    } else {
      alert("Failed to send confirmation email...");
      router.push(`/home`);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="md:max-w-400 mx-auto">
        <div className="mb-6">
          <label
            htmlFor="email-address-icon"
            className="block mb-2 text-sm font-medium text-textPrimary dark:text-gray-300"
          >
            Username
          </label>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 text-primary dark:text-red-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              name="username"
              id="email-address-icon"
              className="bg-gray-50 border border-gray-300 text-textPrimary text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
              placeholder="Your name"
              onChange={handleChange}
              required={true}
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="email-address-icon"
            className="block mb-2 text-sm font-medium text-textPrimary dark:text-gray-300"
          >
            Your Email
          </label>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-primary dark:text-red-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </div>
            <input
              type="email"
              name="email"
              id="email-address-icon"
              className="bg-gray-50 border border-gray-300 text-textPrimary text-sm rounded-lg focus:ring-primary focus:border-red-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
              placeholder="name@flowbite.com"
              onChange={handleChange}
              required={true}
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="website-admin"
            className="block mb-2 text-sm font-medium text-textPrimary dark:text-gray-300"
          >
            Twitter Id
          </label>
          <div className="flex">
            <span className="inline-flex items-center px-3 text-sm bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:border-gray-600 text-primary dark:text-red-400">
              @
            </span>
            <input
              type="text"
              name="twitterId"
              id="website-admin"
              className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-textPrimary focus:ring-red-500 focus:border-red-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
              placeholder="Bonnie Green"
              onChange={handleChange}
              required={true}
            />
          </div>
        </div>
        <div className="mt-8 mb-6">
          <Button text="Confirm" />
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;
