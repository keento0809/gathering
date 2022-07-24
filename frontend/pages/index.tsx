import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { resourceLimits } from "worker_threads";
import { GetCharacterResults, Welcome } from "../models/model";
import styles from "../styles/Home.module.css";

const Home: NextPage<{ characters: Welcome[] }> = ({ characters }) => {
  return (
    <div className={styles.container}>
      <h1 className="text-xl font-bold underline">test</h1>
      {JSON.stringify(characters)}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const { results }: GetCharacterResults = await res.json();

  return {
    props: {
      characters: results,
    },
  };
};

export default Home;
