import { useEffect, useState } from "react";
import Meta from "../meta/Meta";
import Nav from "../components/common/Nav/NavBar";
import { ChildrenProps } from "../types/index";
import Footer from "../components/common/Footer/Footer";
import { useRouter } from "next/router";
import Loader from "../components/common/Loader/Loader";
import { useLoadingContext } from "../components/context/LoadingContext";
import Wrapper from "../components/common/Wrapper/Wrapper";
import HeroPaper from "../components/common/Paper/HeroPaper";

const Layout = ({ children }: ChildrenProps) => {
  const [isHero, setIsHero] = useState(false);
  const { isLoading } = useLoadingContext();
  const router = useRouter();

  useEffect(() => {
    setIsHero(router.route === "/");
  }, [router.route]);

  return (
    <>
      <Meta />
      {isLoading && <Loader />}
      <Nav />
      <div className="containers">
        {router.route !== "/" && <HeroPaper />}
        <section
          className={`container-wrapper bg-secondary w-full rounded-b-xl flex ${
            isHero && "items-center"
          }`}
          style={{ minHeight: "100svh" }}
        >
          <Wrapper>{children}</Wrapper>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
