import MainButton from "../../components/Button/MainButton";
import Card from "../../components/Card/Card";
import CreateGatheringForm from "../../components/Form/CreateGatheringForm";
import { AdminUserProps } from "../../types/admin";

const NewGatheringContainer = ({ currentUser }: AdminUserProps) => {
  return (
    <>
      <div>
        <h2 className="text-2xl font-bold tracking-tighter text-center text-primary dark:text-red-400">
          Create Gathering
        </h2>
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
