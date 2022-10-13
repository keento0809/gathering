import React, { createContext, useContext, useState } from "react";
import { ChildrenProps, loadingContextType } from "../models/model";

const loadingContextValue: loadingContextType = {
  isLoading: false,
  setIsLoading: (bool: boolean) => {},
};

const LoadingContext = createContext<loadingContextType>(loadingContextValue);

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
  const context = useContext(LoadingContext);
  if (!context) {
    alert("Invalid context");
    return;
  }
  return context;
};

export default LoadingProvider;