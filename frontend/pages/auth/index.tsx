import React, { useState } from "react";
import { LoginUserInputObj } from "../../models/model";
import { useRouter } from "next/router";
import { useAdminUserContext } from "../../context/AdminUserContext";
import AuthButton from "../../components/Button/Button";
import Wrapper from "../../components/Wrapper/Wrapper";
import Card from "../../components/Card/Card";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import GithubAuthButton from "../../components/Button/GithubAuthButton";
import MainButton from "../../components/Button/MainButton";

const Login = () => {
  const [userInfo, setUserInfo] = useState<LoginUserInputObj>({
    email: "",
    password: "",
  });
  const { login } = useAdminUserContext();

  const { data: session } = useSession();

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = userInfo;
    if (email === "" || password === "") {
      alert("Invalid credentials");
      return;
    }
    const submitInfo = {
      email,
      password,
    };

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(submitInfo),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      login();
      router.replace("/home");
    } catch (error) {
      console.log(error);
      throw new Error("Invalid login");
    }
  };

  return (
    <>
      <Wrapper>
        <h2 className="text-2xl font-bold text-center tracking-tight text-red-500 dark:text-red-400">
          Admin Authentication
        </h2>
        <Card>
          <div className="text-center pt-4">
            {!session && (
              <div className="text-center text-base">
                <p>Please log in with GitHub below.</p>
                <div className="text-center pt-6">
                  <span
                    onClick={() => {
                      signIn("github");
                    }}
                  >
                    <GithubAuthButton text="Login with GitHub" />
                  </span>
                </div>
              </div>
            )}
            {/* {session && (
              <div className="text-based text-center">
                <p>
                  You've already logged in. Click the button below to jump to
                  Admin User Page.
                </p>
                <p className="text-based text-left">
                  You can sign out from the sign out button below as well.
                </p>
                <div className="text-center py-4">
                  <MainButton text="Admin Page" linkUrl="/admin/1" />
                </div>
                <div className="text-center">
                  <span
                    onClick={() => {
                      signOut();
                    }}
                  >
                    <GithubAuthButton text="Sign out" />
                  </span>
                </div>
              </div>
            )} */}
          </div>
          {/* <form onSubmit={handleSubmit}>
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
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-red-500 dark:text-red-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <input
                  type="email"
                  name="email"
                  id="email-address-icon"
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                  placeholder="name@sample.com"
                  required={true}
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your Password
              </label>
              <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-red-500 dark:text-red-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                  placeholder="Password"
                  required={true}
                />
              </div>
            </div>
            <AuthButton text="Login" />
            <div className="pt-8 text-white">
              This page is the login page only for{" "}
              <span className="font-bold text-red-500 cursor-pointer">
                admin
              </span>
              , so users cannot login in this application.
            </div>
          </form> */}
        </Card>
      </Wrapper>
    </>
  );
};

export default Login;
