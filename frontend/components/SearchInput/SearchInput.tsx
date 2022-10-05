import React from "react";

interface handleInputWord {
  handleInputWord: (word: string) => void;
}

const SearchInput = ({ handleInputWord }: handleInputWord) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleInputWord(e.target.value.toLowerCase());
  };
  return (
    <>
      <form>
        <div className="flex lg:justify-center">
          <div className="relative w-full md:w-1/2">
            <input
              type="search"
              id="search-dropdown"
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-l-lg rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-red-500"
              placeholder="Search"
              onChange={handleChange}
            />
            <button
              type="submit"
              className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-red-500 rounded-r-lg border border-red-500 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-500 dark:focus:ring-red-800"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default SearchInput;
