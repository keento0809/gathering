import { useEffect, useState } from "react";
import Meta from "../meta/Meta";
import Nav from "../components/navbar/NavBar";
import { ChildrenProps } from "../types/index";
import Footer from "../components/Footer/Footer";
import { useRouter } from "next/router";
import Loader from "../components/Loader/Loader";
import { useLoadingContext } from "../context/LoadingContext";
import Wrapper from "../components/Wrapper/Wrapper";
import HeroPaper from "../components/Paper/HeroPaper";

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
      {isLoading && <Loader />}
    </>
  );
};

export default Layout;
