import {
  userContextType,
  ChildrenProps,
  userInfoObjType,
} from "../models/model";
import { createContext, useContext, useState } from "react";

const userContextValue: userContextType = {
  isLoggedIn: false,
  userInfo: {
    username: "",
    email: "",
    joinGathering: [],
    hostGathering: [],
  },
  login: () => {},
  logout: () => {},
};

const UserContext = createContext<userContextType>(userContextValue);

const UserProvider = ({ children }: ChildrenProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const userInfo = {
    username: "",
    email: "",
    joinGathering: [],
    hostGathering: [],
  };
  const login = () => {
    setIsLoggedIn(true);
  };
  const logout = () => {
    setIsLoggedIn(false);
  };
  const value = {
    isLoggedIn,
    userInfo,
    login,
    logout,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export function useUserContext() {
  return useContext(UserContext);
}

export default UserProvider;
