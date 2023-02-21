import MainButton from "../../components/Button/MainButton";
import Card from "../../components/Card/Card";

const CompleteCreatingGathering = () => {
  return (
    <>
      <h2 className="text-2xl text-center font-bold tracking-tighter text-left text-primary">
        New Gathering Created!
      </h2>
      <Card>
        <div className="pt-2">
          <p className="text-lg font-bold tracking-tight">
            Please check the details below.
          </p>
          <p className="text-lg font-bold tracking-tight">
            Manage your gathering as organizer!
          </p>
        </div>
      </Card>
      <div className="text-center pt-8">
        <MainButton text="Home" linkUrl="/home" />
      </div>
    </>
  );
};

export default CompleteCreatingGathering;
