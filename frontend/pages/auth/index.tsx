import React, { useState } from "react";
import Link from "next/link";
import { LoginUserInputObj } from "../../models/model";
import { useRouter } from "next/router";
import { useAdminUserContext } from "../../context/AdminUserContext";
import AuthButton from "../../components/Button/Button";
import Wrapper from "../../components/Wrapper/Wrapper";

const Login = () => {
  const [userInfo, setUserInfo] = useState<LoginUserInputObj>({
    email: "",
    password: "",
  });
  const { login } = useAdminUserContext();

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
        <h2 className="text-2xl font-bold text-center tracking-tighter text-red-500 dark:text-red-400">
          Login
        </h2>
        <section className="auth-form rounded-xl bg-slate-400 min-h-500 p-8 mt-6">
          <form onSubmit={handleSubmit}>
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Password"
                  required={true}
                />
              </div>
            </div>
            <AuthButton text="Login" />
            <div className="pt-8 text-white">
              Need an account?{" "}
              <span className="font-bold text-red-500 cursor-pointer">
                <Link href="/auth/signup">Signup</Link>{" "}
              </span>
              Here!
            </div>
          </form>
        </section>
      </Wrapper>
    </>
  );
};

export default Login;
