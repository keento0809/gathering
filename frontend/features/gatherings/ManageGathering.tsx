import { useEffect } from "react";
import Card from "../../components/common/Card/Card";
import EditGatheringForm from "../../components/common/Form/EditGatheringForm";
import { GatheringProps } from "../../types/gathering";
import MainButton from "../../components/common/Button/MainButton";
import { useLoadingContext } from "../../components/context/LoadingContext";
import Title from "../../components/common/Title/Title";

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
