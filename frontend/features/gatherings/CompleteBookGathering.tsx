import MainButton from "../../components/Button/MainButton";
import Card from "../../components/Card/Card";
import { GatheringProps } from "../../types/gathering";
import { useEffect } from "react";
import { useLoadingContext } from "../../context/LoadingContext";
import Title from "../../components/Title/Title";
import CompleteBookingList from "../../components/List/CompleteBookingList";

const CompleteBookGathering = ({ gathering }: GatheringProps) => {
  const { isLoading, setIsLoading } = useLoadingContext();

  useEffect(() => {
    isLoading && setIsLoading(false);
  }, []);

  return (
    <>
      <Title title={"Confirmed!"} />
      <Card>
        <div className="pt-2">
          <p className="text-lg font-bold tracking-tight">
            Your booking has been secured!
          </p>
          <p className="text-sm text-gray-700 font-normal tracking-tight pt-1">
            Please check the details below.
          </p>
        </div>
        <div className="pt-14 pb-8">
          <CompleteBookingList gathering={gathering} />
        </div>
      </Card>
      <div className="text-center pt-8">
        <MainButton text="Home" linkUrl="/home" />
      </div>
    </>
  );
};

export default CompleteBookGathering;
