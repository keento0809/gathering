import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import SearchInput from "../../components/SearchInput/SearchInput";
import { server } from "../../config";
import { GatheringsArrayType, GatheringType } from "../../models/model";
import GatheringsList from "../../components/List/GatheringsList";
import sortGatherings from "../../Helper/sortGatherings";
import Head from "next/head";
import Title from "../../components/Title/Title";
import { useLoadingContext } from "../../context/LoadingContext";

const SearchGathering = ({ data }: GatheringsArrayType) => {
  const [inputWord, setInputWord] = useState("");
  const handleInputWord: (word: string) => void = (word) => {
    setInputWord(word);
  };
  const { upcomingGatherings } = sortGatherings(data);
  const { isLoading, setIsLoading } = useLoadingContext();

  const filteredData = upcomingGatherings.filter((gathering: GatheringType) =>
    gathering.title.toLowerCase().includes(inputWord)
  );

  useEffect(() => {
    isLoading && setIsLoading(false);
  }, []);

  return (
    <>
      <Head>
        <title>Find Gathering</title>
      </Head>
      <div>
        <Title title={`Search Gathering`} />
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
