import { AdminUserInfoObj } from "../types/admin";
import { ChildrenProps } from "../types";
import { createContext, useContext, useState } from "react";

type UserContext = {
  isLoggedIn: boolean;
  isLoading: boolean;
  currentUserInfo: AdminUserInfoObj;
  login: () => void;
  logout: () => void;
  loadingOn: () => void;
  loadingOff: () => void;
  setCurrUser: (userObj: AdminUserInfoObj) => void;
  resetCurrUser: () => void;
};

const userContextValue: UserContext = {
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
  setCurrUser: (userObj: AdminUserInfoObj) => {},
  resetCurrUser: () => {},
};

const UserContext = createContext<UserContext>(userContextValue);

const AdminUserProvider = ({ children }: ChildrenProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUserInfo, setCurrentUserInfo] = useState<AdminUserInfoObj>({
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
  const setCurrUser = (userObj: AdminUserInfoObj) => {
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
