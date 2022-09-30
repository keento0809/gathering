import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import React, { useState } from "react";
import GatheringCard from "../../components/Card/GatheringCard";
import SearchInput from "../../components/SearchInput/SearchInput";
import Wrapper from "../../components/Wrapper/Wrapper";
import { server } from "../../config";
import { GatheringsArrayType, GatheringType } from "../../models/model";
import UpcomingGathering from "../../components/List/UpcomingGathering";

const SearchGathering = ({ data }: GatheringsArrayType) => {
  const [inputWord, setInputWord] = useState("");
  const handleInputWord: (word: string) => void = (word) => {
    setInputWord(word);
  };
  console.log(inputWord);
  return (
    <Wrapper>
      <h2 className="text-2xl pl-0.5 font-bold tracking-tighter text-left text-red-500 dark:text-red-400">
        Search Gathering
      </h2>
      <div className="explanations py-8">
        <div className="pb-1.5">
          <SearchInput handleInputWord={handleInputWord} />
        </div>
        <UpcomingGathering data={data} />
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
