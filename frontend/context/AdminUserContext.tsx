import {
  userContextType,
  ChildrenProps,
  adminUserInfoObjType,
} from "../models/model";
import { createContext, SetStateAction, useContext, useState } from "react";

const userContextValue: userContextType = {
  isLoading: false,
  isLoggedIn: false,
  currentUserInfo: {
    id: null,
    username: "",
    email: "",
    hostGathering: [],
  },
  login: () => {},
  logout: () => {},
  loadingOn: () => {},
  loadingOff: () => {},
  setCurrUser: (userObj: adminUserInfoObjType) => {},
  resetCurrUser: () => {},
};

const UserContext = createContext<userContextType>(userContextValue);

const AdminUserProvider = ({ children }: ChildrenProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUserInfo, setCurrentUserInfo] = useState<adminUserInfoObjType>({
    id: null,
    username: "",
    email: "",
    hostGathering: [],
  });
  const login = () => {
    setIsLoggedIn(true);
  };
  const logout = () => {
    setIsLoggedIn(false);
  };
  const loadingOn = () => {
    setIsLoading(true);
  };
  const loadingOff = () => {
    setIsLoading(false);
  };
  const setCurrUser = (userObj: adminUserInfoObjType) => {
    setCurrentUserInfo(userObj);
  };
  const resetCurrUser = () => {
    setCurrentUserInfo({
      id: null,
      username: "",
      email: "",
      hostGathering: [],
    });
  };
  const value = {
    isLoading,
    isLoggedIn,
    currentUserInfo,
    login,
    logout,
    loadingOn,
    loadingOff,
    setCurrUser,
    resetCurrUser,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export function useAdminUserContext() {
  return useContext(UserContext);
}

export default AdminUserProvider;
