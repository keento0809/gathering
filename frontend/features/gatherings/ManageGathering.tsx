import { useEffect } from "react";
import Card from "../../components/Card/Card";
import EditGatheringForm from "../../components/Form/EditGatheringForm";
import { GatheringProps } from "../../types/gathering";
import MainButton from "../../components/Button/MainButton";
import { useLoadingContext } from "../../context/LoadingContext";
import Title from "../../components/Title/Title";

const ManageGathering = ({ gathering }: GatheringProps) => {
  const { isLoading, setIsLoading } = useLoadingContext();

  useEffect(() => {
    isLoading && setIsLoading(false);
  }, []);

  return (
    <>
      <Title title={"Manage Gathering"} />
      <Card>
        <EditGatheringForm gathering={gathering} />
      </Card>
      <div className="text-center pt-6">
        <MainButton text="Back" linkUrl={`/admin/home`} />
      </div>
    </>
  );
};

export default ManageGathering;
