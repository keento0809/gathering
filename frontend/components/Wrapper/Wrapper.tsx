import { ChildrenProps } from "../../models/model";
import { useRouter } from "next/router";

const Wrapper = ({ children }: ChildrenProps) => {
  const router = useRouter();
  return (
    <div
      className={`w-full z-20 ${router.asPath === "/" ? "px-0" : "px-5"} ${
        router.asPath === "/" ? "pt-15" : "pt-24"
      }`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
