import {
  userContextType,
  ChildrenProps,
  adminUserInfoObjType,
} from "../models/model";
import { createContext, useContext, useState } from "react";

const userContextValue: userContextType = {
  isLoggedIn: false,
  userInfo: {
    id: null,
    username: "",
    email: "",
    hostGathering: [],
  },
  login: () => {},
  logout: () => {},
};

const UserContext = createContext<userContextType>(userContextValue);

const AdminUserProvider = ({ children }: ChildrenProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const userInfo = {
    id: null,
    username: "",
    email: "",
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

export function useAdminUserContext() {
  return useContext(UserContext);
}

export default AdminUserProvider;
