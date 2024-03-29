import { useEffect, useState } from "react";
import SearchInput from "../../common/Input/SearchInput";
import { GatheringsArrayType, GatheringType } from "../../../types/gathering";
import GatheringsList from "../../common/List/GatheringsList";
import sortGatherings from "../../../helpers/sortGatherings";
import Title from "../../common/Title/Title";
import { useLoadingContext } from "../../context/LoadingContext";

const SearchGatheringPage = ({ data }: GatheringsArrayType) => {
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

export default SearchGatheringPage;
