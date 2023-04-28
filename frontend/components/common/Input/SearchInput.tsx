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
          <div className="relative w-full md:max-w-400 lg:max-w-500">
            <input
              type="search"
              id="search-dropdown"
              className="block p-2.5 w-full z-20 text-sm text-textPrimary rounded-l-lg rounded-r-lg border-l-1 border border-gray-300 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-primary"
              placeholder="Search"
              onChange={handleChange}
            />
            <button
              type="submit"
              className="absolute h-full top-0 right-0 p-2.5 text-sm font-medium transition-all text-white bg-primary rounded-r-lg border border-primary hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-primary dark:focus:ring-red-600"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="none"
                stroke="white"
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
