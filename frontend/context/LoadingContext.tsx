import { createContext, useContext, useState } from "react";
import { ChildrenProps } from "../types/index";

type LoadingContext = {
  isLoading: boolean;
  setIsLoading: (bool: boolean) => void;
};

const loadingContextValue: LoadingContext = {
  isLoading: false,
  setIsLoading: (bool: boolean) => {},
};

const LoadingContext = createContext<LoadingContext>(loadingContextValue);

const LoadingProvider = ({ children }: ChildrenProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const setLoadingFunc = (bool: boolean) => {
    setIsLoading(bool);
  };
  const value = {
    isLoading,
    setIsLoading: setLoadingFunc,
  };
  return (
    <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
  );
};

export const useLoadingContext = () => {
  return useContext(LoadingContext);
};

export default LoadingProvider;
