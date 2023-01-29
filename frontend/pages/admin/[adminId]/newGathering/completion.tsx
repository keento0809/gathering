import Head from "next/head";
import MainButton from "../../../../components/Button/MainButton";
import Card from "../../../../components/Card/Card";
import Wrapper from "../../../../components/Wrapper/Wrapper";

const Completion = () => {
  return (
    <>
      <Head>
        <title>Complete</title>
      </Head>
      <Wrapper>
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
      </Wrapper>
      ;
    </>
  );
};

export default Completion;
