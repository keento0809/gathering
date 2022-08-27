import React from "react";
import { Url } from "url";

export interface MetaDefaultPropsType {
  title: string;
  keywords: string;
  description: string;
}

export interface ChildrenProps {
  children: React.ReactNode;
}

export interface LayoutProps {
  children: React.ReactNode;
}

export interface AuthButtonProps {
  text: String;
}

export interface MainButtonProps {
  text: String;
  linkUrl: Url | string;
}

export interface SingupUserInputObj {
  username: String;
  email: String;
  password: String;
  passwordConfirm: String;
}

export interface LoginUserInputObj {
  email: String;
  password: String;
}

export interface GatheringType {
  title: string;
  capacity: number;
  date: string;
  isFull: boolean;
  participants: userInfoObjType[];
  host: userInfoObjType;
}

export interface userInfoObjType {
  username: string;
  email: string;
  joinGathering: GatheringType[];
  hostGathering: GatheringType[];
}

export interface userContextType {
  isLoggedIn: boolean;
  userInfo: userInfoObjType;
  login: () => void;
  logout: () => void;
}
