import React from "react";
import { Url } from "url";

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
