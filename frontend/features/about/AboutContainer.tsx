import Card from "../../components/Card/Card";
import MainButton from "../../components/Button/MainButton";
import { useLoadingContext } from "../../context/LoadingContext";
import { useEffect } from "react";

const AboutContainer = () => {
  const { isLoading, setIsLoading } = useLoadingContext();

  useEffect(() => {
    isLoading && setIsLoading(false);
  }, []);

  return (
    <>
      <h2 className="text-2xl pl-2 font-bold tracking-tighter text-left lg:text-center text-primary dark:text-red-400">
        About
      </h2>
      <Card>
        <div className="explanations py-2 lg:max-w-800 lg:mx-auto">
          <section className="pb-12">
            <h3 className="section-title text-lg font-extrabold">
              What is Gathering?
            </h3>
            <p className="pt-6 font-medium">
              Gathering is a social media platform for organizing in-person
              meetup events. You can join the &ldquo;gathering&rdquo;, which
              stands for an event on this application, to explore your social
              network or escape from your comfort zone, and so on. Join our
              gatherings today to broaden your horizon!
            </p>
          </section>
          <section className="pb-12">
            <h3 className="section-title text-lg font-extrabold">
              How to join Gathering?
            </h3>
            <p className="pt-6 font-medium">
              The way to join a gathering is to select a gathering that you want
              to join by pressing &ldquo;More&rdquo; button, and then fill out
              the information (name, email, and TwitterID). After that, press
              &ldquo;Join&rdquo; button to complete the application for
              gathering.
            </p>
          </section>
          <section className="pb-12">
            <h3 className="section-title text-lg font-extrabold">
              How to cancel Gathering?
            </h3>
            <p className="pt-6">
              If you would like to call off a gathering, you need to directly
              contact to the organizer of gathering that you will join sending a
              message by email.
            </p>
          </section>
        </div>
      </Card>
      <div className="text-center pt-6">
        <MainButton text="Back" linkUrl={`/home`} />
      </div>
    </>
  );
};

export default AboutContainer;
