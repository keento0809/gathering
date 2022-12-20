import type { NextPage } from "next";
import { useState } from "react";
import MainAlert from "../components/Alert/MainAlert";
import MainButton from "../components/Button/MainButton";

const Home: NextPage = () => {
  const [isAlert, setIsAlert] = useState(false);
  return (
    <>
      <div className="pt-16 lg:text-center left-0 w-full px-5">
        {/* <div className="fixed top-96 lg:top-64 lg:text-center left-0 w-full px-5"> */}
        <section className="hero-body pt-6">
          <div className="hero-title">
            <h1 className="text-4xl font-bold tracking-tighter">Gathering</h1>
            <h3 className="text-2xl font-bold tracking-tighter pt-2">
              - Connect Together -
            </h3>
          </div>
          <div className="hero-description py-8 lg:py-10 tracking-tight">
            <p className="text-lg">Find and interact with new people</p>
            <p className="text-lg">Explore now to make your life better.</p>
          </div>
          <MainButton text="Get started" linkUrl="/home" />
        </section>
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
