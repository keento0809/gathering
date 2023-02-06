import { ChildrenProps } from "../../models/model";
import { useRouter } from "next/router";

const Wrapper = ({ children }: ChildrenProps) => {
  const router = useRouter();
  return (
    <div className={`w-full px-5 pt-${router.asPath === "/" ? 15 : 24}`}>
      {children}
    </div>
  );
};

export default Wrapper;
