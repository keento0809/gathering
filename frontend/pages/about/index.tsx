import React from "react";
import Card from "../../components/Card/Card";
import Wrapper from "../../components/Wrapper/Wrapper";

const About = () => {
  return (
    <>
      <Wrapper>
        <h2 className="text-2xl pl-0.5 font-bold tracking-tighter text-left text-red-500 dark:text-red-400">
          About
        </h2>
        <div className="explanations py-8">
          <section className="pb-8">
            <h3 className="section-title text-lg font-bold">
              What is Gathering?
            </h3>
            <p className="pt-2">Gathering is ...</p>
          </section>
          <section className="pb-8">
            <h3 className="section-title text-lg font-bold">
              How to join Gathering?
            </h3>
            <p className="pt-2">The way to join a gathering is ...</p>
          </section>
          <section className="pb-8">
            <h3 className="section-title text-lg font-bold">
              How to cancel Gathering?
            </h3>
            <p className="pt-2">
              If you cannot make a gathering, you have to directly contact to
              ...
            </p>
          </section>
        </div>
      </Wrapper>
    </>
  );
};

export default About;
