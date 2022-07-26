import React from "react";
import { Url } from "url";

export interface LayoutProps {
  children: React.ReactNode;
}

export interface MainButtonProps {
  text: String;
  linkUrl: Url | string;
}
