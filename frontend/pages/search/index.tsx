import { GetServerSideProps } from "next";
import { useState } from "react";
import SearchInput from "../../components/SearchInput/SearchInput";
import { server } from "../../config";
import { GatheringsArrayType, GatheringType } from "../../models/model";
import GatheringsList from "../../components/List/GatheringsList";
import sortGatherings from "../../Helper/sortGatherings";
import Head from "next/head";

const SearchGathering = ({ data }: GatheringsArrayType) => {
  const [inputWord, setInputWord] = useState("");
  const handleInputWord: (word: string) => void = (word) => {
    setInputWord(word);
  };
  const { upcomingGatherings } = sortGatherings(data);
  const filteredData = upcomingGatherings.filter((gathering: GatheringType) =>
    gathering.title.toLowerCase().includes(inputWord)
  );
  return (
    <>
      <Head>
        <title>Find Gathering</title>
      </Head>
      <div>
        <h2 className="text-2xl pl-0.5 font-bold tracking-tighter text-left lg:text-center text-primary dark:text-red-400">
          Search Gathering
        </h2>
        <div className="explanations pt-3 pb-8">
          <div className="text-sm pl-0.5 pb-2">
            <p className="lg:text-center">
              <span className="font-bold">{filteredData.length} gathering</span>{" "}
              matches
            </p>
          </div>
          <div className="pb-1.5">
            <SearchInput handleInputWord={handleInputWord} />
          </div>
          <GatheringsList data={filteredData} />
        </div>
      </div>
    </>
  );
};

export default SearchGathering;

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch(`${server}/api/gatherings`);
  const allGatherings = await response.json();
  return {
    props: {
      data: allGatherings,
    },
  };
};
