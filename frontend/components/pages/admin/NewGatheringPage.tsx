import MainButton from "../../common/Button/MainButton";
import Card from "../../common/Card/Card";
import CreateGatheringForm from "../../common/Form/CreateGatheringForm";
import { AdminUserProps } from "../../../types/admin";
import Title from "../../common/Title/Title";

const NewGatheringPage = ({ currentUser }: AdminUserProps) => {
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

export default NewGatheringPage;
