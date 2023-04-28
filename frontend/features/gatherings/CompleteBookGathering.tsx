import MainButton from "../../components/common/Button/MainButton";
import Card from "../../components/common/Card/Card";
import { GatheringProps } from "../../types/gathering";
import { useEffect } from "react";
import { useLoadingContext } from "../../context/LoadingContext";
import Title from "../../components/common/Title/Title";
import CompleteBookingList from "../../components/common/List/CompleteBookingList";

const CompleteBookGathering = ({ gathering }: GatheringProps) => {
  const { isLoading, setIsLoading } = useLoadingContext();

  useEffect(() => {
    isLoading && setIsLoading(false);
  }, []);

  return (
    <>
      <Title title={"Confirmed!"} />
      <Card>
        <div className="pt-2 lg:text-center">
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
      <div className="text-center mt-8">
        <MainButton text="Home" linkUrl="/home" />
      </div>
    </>
  );
};

export default CompleteBookGathering;
