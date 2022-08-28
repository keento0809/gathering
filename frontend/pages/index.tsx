import type { NextPage } from "next";
import Nav from "../components/nav/Nav";
import { Fragment } from "react";
import Link from "next/link";
import MainButton from "../components/Button/MainButton";

const Home: NextPage = () => {
  return (
    <>
      <div className="fixed top-96 left-0 w-full px-5">
        <section className="hero-body pt-6">
          <div className="hero-title">
            <h1 className="text-4xl font-bold tracking-tighter">Gathering</h1>
            <h3 className="text-2xl font-bold tracking-tighter pt-2">
              - Connect Together -
            </h3>
          </div>
          <div className="hero-description py-8 tracking-tight">
            <p className="text-lg">Find and interact with new people</p>
            <p className="text-lg">Explore now to make your life better.</p>
          </div>
          <MainButton text="Get started" linkUrl="/home" />
        </section>
      </div>
    </>
  );
};

export default Home;
