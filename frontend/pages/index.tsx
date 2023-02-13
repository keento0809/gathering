import type { NextPage } from "next";
import { useState } from "react";
import MainAlert from "../components/Alert/MainAlert";
import MainButton from "../components/Button/MainButton";
const Home: NextPage = () => {
  const [isAlert, setIsAlert] = useState(false);
  return (
    <>
      <div
        className="lg:text-center left-0 w-full flex flex-col-reverse lg:flex-row justify-center lg:items-center"
        style={{ height: "100svh" }}
      >
        <section className="hero-body flex-1 pt-6 px-5 lg:px-0 lg:pt-0">
          <div className="hero-title">
            <h1 className="text-3xl lg:text-4xl font-bold tracking-tighter">
              Gathering
            </h1>
            <h3 className="text-xl lg:text-2xl font-bold tracking-tighter pt-2">
              - Connect Together -
            </h3>
          </div>
          <div className="hero-description py-8 lg:py-10 tracking-tight">
            <p className="text-lg">Find and interact with new people</p>
            <p className="text-lg">Explore now to make your life better.</p>
          </div>
          <MainButton text="Get started" linkUrl="/home" />
        </section>
        <section className="flex-1 w-auto h-full bg-[url('../public/static/hero_1.jpg')] bg-cover bg-center"></section>
        {isAlert && (
          <MainAlert
            text="This is a test alert"
            isAlert={isAlert}
            setIsAlert={setIsAlert}
          />
        )}
      </div>
    </>
  );
};

export default Home;
