import { useEffect, useState } from "react";
import SearchInput from "../../components/SearchInput/SearchInput";
import { GatheringsArrayType, GatheringType } from "../../types/gathering";
import GatheringsList from "../../components/List/GatheringsList";
import sortGatherings from "../../Helper/sortGatherings";
import Title from "../../components/Title/Title";
import { useLoadingContext } from "../../context/LoadingContext";

const SearchGatheringContainer = ({ data }: GatheringsArrayType) => {
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
      <Title title={`Search Gathering`} />
      <div className="explanations mt-4 mb-8">
        <div className="text-sm pl-0.5 pb-2">
          <p className="lg:text-center">
            <span className="font-bold">{filteredData.length} gathering</span>{" "}
            matches
          </p>
        </div>
        <div className="pb-2">
          <SearchInput handleInputWord={handleInputWord} />
        </div>
        <GatheringsList data={filteredData} />
      </div>
    </>
  );
};

export default SearchGatheringContainer;
