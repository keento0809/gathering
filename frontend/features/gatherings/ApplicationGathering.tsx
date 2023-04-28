import Card from "../../components/common/Card/Card";
import ApplicationForm from "../../components/common/Form/ApplicationForm";
import { GatheringProps } from "../../types/gathering";
import { useEffect } from "react";
import { useLoadingContext } from "../../components/context/LoadingContext";
import Title from "../../components/common/Title/Title";

const ApplicationGathering = ({ gathering }: GatheringProps) => {
  const { isLoading, setIsLoading } = useLoadingContext();

  useEffect(() => {
    isLoading && setIsLoading(false);
  }, []);

  return (
    <>
      <Title title={"Book gathering"} />
      <p className="text-sm text-left lg:text-center mt-8 px-2 md:max-w-580 md:mx-auto">
        Please fill out your information to join the gathering. After pushing
        the confirm button, your booking will be secured immediately.
      </p>
      <Card>
        <ApplicationForm gathering={gathering} />
      </Card>
    </>
  );
};

export default ApplicationGathering;
