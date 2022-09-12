import React, { useState } from "react";
import Button from "../Button/Button";
import { useRouter } from "next/router";

const ApplicationForm = () => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    twitterId: "",
  });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };
  console.log(userInfo);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit!");
    router.replace(`/gathering/${1}/completion`);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label
            htmlFor="email-address-icon"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
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
                className="w-5 h-5 text-red-500 dark:text-red-400"
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
              id="email-address-icon"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
              placeholder="Your name"
              onChange={handleChange}
              required={true}
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="email-address-icon"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your Email
          </label>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-red-500 dark:text-red-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </div>
            <input
              type="text"
              id="email-address-icon"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
              placeholder="name@flowbite.com"
              onChange={handleChange}
              required={true}
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="website-admin"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Twitter Id
          </label>
          <div className="flex">
            <span className="inline-flex items-center px-3 text-sm bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:border-gray-600 text-red-500 dark:text-red-400">
              @
            </span>
            <input
              type="text"
              id="website-admin"
              className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-red-500 focus:border-red-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
              placeholder="Bonnie Green"
              onChange={handleChange}
              required={true}
            />
          </div>
        </div>
        <div className="my-6">
          <Button text="Confirm" />
        </div>
      </form>
    </>
  );
};

export default ApplicationForm;
