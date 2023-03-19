import { ChildrenProps } from "../../types/index";
import { useRouter } from "next/router";

const Wrapper = ({ children }: ChildrenProps) => {
  const router = useRouter();
  return (
    <div
      className={`w-full z-20 ${router.asPath === "/" ? "px-0" : "px-5"} ${
        router.asPath === "/" ? "lg:pt-14" : "pt-24"
      }`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
