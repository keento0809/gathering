import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import React, { useState } from "react";
import GatheringCard from "../../components/Card/GatheringCard";
import SearchInput from "../../components/SearchInput/SearchInput";
import Wrapper from "../../components/Wrapper/Wrapper";
import { server } from "../../config";
import { GatheringsArrayType, GatheringType } from "../../models/model";
import GatheringsList from "../../components/List/GatheringsList";

const SearchGathering = ({ data }: GatheringsArrayType) => {
  const [inputWord, setInputWord] = useState("");
  const handleInputWord: (word: string) => void = (word) => {
    setInputWord(word);
  };
  const filteredData = data.filter((gathering: GatheringType) =>
    gathering.title.toLowerCase().includes(inputWord)
  );
  return (
    <Wrapper>
      <h2 className="text-2xl pl-0.5 font-bold tracking-tighter text-left lg:text-center text-red-500 dark:text-red-400">
        Search Gathering
      </h2>
      <div className="explanations pt-3 pb-8">
        <div className="text-sm pl-0.5 pb-2">
          <p className="lg:text-center">
            <span className="font-semibold">
              {filteredData.length} gathering
            </span>{" "}
            matches
          </p>
        </div>
        <div className="pb-1.5">
          <SearchInput handleInputWord={handleInputWord} />
        </div>
        <GatheringsList data={filteredData} />
      </div>
    </Wrapper>
  );
};

export default SearchGathering;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await fetch(`${server}/api/gatherings`);
  const allGatherings = await response.json();
  return {
    props: {
      data: allGatherings,
    },
  };
};
