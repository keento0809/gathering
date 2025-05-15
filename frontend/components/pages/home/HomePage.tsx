import { useState, useEffect } from "react";
import GatheringsList from "../../common/List/GatheringsList";
import { GatheringsArrayType } from "../../../types/gathering";
import sortGatherings from "../../../helpers/sortGatherings";
import { useLoadingContext } from "../../context/LoadingContext";

const HomePage = ({ data }: GatheringsArrayType) => {
  const [bool, setBool] = useState<Boolean>(false);

  const handleToggleContents = (currBool: Boolean, text: string) => {
    if ((currBool && text === "past") || (!currBool && text === "upcoming"))
      return;
    setBool(!bool);
  };
  const { upcomingGatherings, expiredGatherings } = sortGatherings(data);
  const { isLoading, setIsLoading } = useLoadingContext();

  useEffect(() => {
    isLoading && setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="home-title lg:text-center">
        <h3 className="text-3xl text-primary font-bold tracking-tight [text-shadow:_0_2px_2px_rgb(255_255_255_/_70%)]">
          Welcome to Gathering!
        </h3>
        <p className="font-semibold text-md pt-1 tracking-tight [text-shadow:_0_2px_2px_rgb(255_255_255_/_70%)]">
          Explore new gathering here
        </p>
      </div>
      <div className="pb-4 mt-8 lg:mt-12">
        <div className="flex flex-row justify-start lg:justify-center">
          <div>
            <h3
              onClick={() => handleToggleContents(bool, "upcoming")}
              className={`${
                !bool ? "text-primary border-b-4 border-primary" : ""
              } ${
                bool && "border-transparent"
              } inline-block text-xl cursor-pointer border-b-4 pb-0.5 lg:pb-1 lg:text-center font-bold tracking-tight overflow-y-scroll transition-all [text-shadow:_0_2px_2px_rgb(255_255_255_/_70%)]`}
            >
              Upcoming
            </h3>
          </div>
          <div className="pl-4">
            <h3
              onClick={() => handleToggleContents(bool, "past")}
              className={`${bool ? "text-primary border-primary" : ""} ${
                !bool && "border-transparent"
              } inline-block text-xl border-b-4 cursor-pointer pb-0.5 lg:pb-1 lg:text-center font-bold tracking-tight overflow-y-scroll transition-all [text-shadow:_0_2px_2px_rgb(255_255_255_/_70%)]`}
            >
              Past
            </h3>
          </div>
        </div>
        <div className={`${bool ? "hidden" : "block"}`}>
          <GatheringsList data={upcomingGatherings} />
          {upcomingGatherings.length === 0 && (
            <p className="text-lg font-semibold text-center pt-2">
              No Upcoming Gatherings Found
            </p>
          )}
        </div>
        <div className={`${!bool ? "hidden" : "block"}`}>
          <GatheringsList data={expiredGatherings} />
          {expiredGatherings.length === 0 && (
            <p className="text-lg font-semibold text-center pt-2">
              No Expired Gatherings Found
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default HomePage;
