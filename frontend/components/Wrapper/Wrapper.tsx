import { ChildrenProps } from "../../models/model";

const Wrapper = ({ children }: ChildrenProps) => {
  return <div className="w-full px-5 pt-24">{children}</div>;
};

export default Wrapper;
