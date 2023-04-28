import Card from "../../components/common/Card/Card";
import MainButton from "../../components/common/Button/MainButton";
import { useLoadingContext } from "../../components/context/LoadingContext";
import { useEffect } from "react";
import { aboutContents } from "../../constants/about";

const AboutContainer = () => {
  const { isLoading, setIsLoading } = useLoadingContext();

  useEffect(() => {
    isLoading && setIsLoading(false);
  }, []);

  return (
    <>
      <h2 className="text-2xl pl-2 font-bold tracking-tighter text-left lg:text-center text-primary dark:text-red-400">
        About
      </h2>
      <Card>
        <div className="explanations py-2 lg:max-w-800 lg:mx-auto">
          {aboutContents.map((content) => {
            return (
              <section className="mb-12">
                <h3 className="section-title text-lg font-bold">
                  {content.title}
                </h3>
                <p className="pt-4">{content.description}</p>
              </section>
            );
          })}
        </div>
      </Card>
      <div className="text-center pt-6 mb-5">
        <MainButton text="Back" linkUrl={`/home`} />
      </div>
    </>
  );
};

export default AboutContainer;
