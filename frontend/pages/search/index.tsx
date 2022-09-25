import React from "react";
import SearchInput from "../../components/SearchInput/SearchInput";
import Wrapper from "../../components/Wrapper/Wrapper";

const SearchGathering = () => {
  return (
    <Wrapper>
      <h2 className="text-2xl pl-0.5 font-bold tracking-tighter text-left text-red-500 dark:text-red-400">
        Search Gathering
      </h2>
      <div className="explanations py-8">
        <SearchInput />
        <div className=""></div>
      </div>
    </Wrapper>
  );
};

export default SearchGathering;
