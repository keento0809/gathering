import type { NextPage } from "next";
import Nav from "../components/nav/Nav";
import { Fragment } from "react";
import Container from "../components/Layout/Container";

const Home: NextPage = () => {
  return (
    <Fragment>
      <Nav />
      <Container>
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
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
            <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Get started
            </span>
          </button>
        </section>
      </Container>
      {/* <div className="hero">
        <section
          className={`hero-image w-full h-96 rounded-b-xl bg-common bg-cover bg-center flex justify-center items-center`}
        ></section>
        <section className="hero-body px-5 pt-6">
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
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
            <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Get started
            </span>
          </button>
        </section>
      </div> */}
    </Fragment>
  );
};

export default Home;
