import MainButton from "../../components/common/Button/MainButton";
import Card from "../../components/common/Card/Card";
import CreateGatheringForm from "../../components/common/Form/CreateGatheringForm";
import { AdminUserProps } from "../../types/admin";
import Title from "../../components/common/Title/Title";

const NewGatheringContainer = ({ currentUser }: AdminUserProps) => {
  return (
    <>
      <div>
        <Title title={"Create Gathering"} />
        <Card>
          <CreateGatheringForm currentUser={currentUser} />
        </Card>
        <div className="text-center pt-6 pb-4">
          <MainButton text="Back" linkUrl={`/admin/home`} />
        </div>
      </div>
    </>
  );
};

export default NewGatheringContainer;
