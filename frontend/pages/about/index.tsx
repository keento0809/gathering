import Card from "../../components/Card/Card";
import MainButton from "../../components/Button/MainButton";
import Head from "next/head";
import AboutContainer from "../../features/about/AboutContainer";

const About = () => {
  return (
    <>
      <Head>
        <title>About Gathering</title>
      </Head>
      <AboutContainer />
    </>
  );
};

export default About;
