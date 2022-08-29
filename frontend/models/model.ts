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

export interface timeScheduleObj {
  time: string;
  agenda: string;
}

export interface placeLatLngObj {
  lat: number;
  lng: number;
}

export interface GatheringType {
  _id: number;
  title: string;
  image: string;
  description: string;
  capacity: number;
  date: string;
  schedule: string;
  timeSchedule: timeScheduleObj[];
  placeName: string;
  placeLatLng: placeLatLngObj;
  isFull: boolean;
  participants: string[];
  specialNotes: string;
  organizer: adminUserInfoObjType;
}

export interface participantInfoObj {
  id: number;
  username: string;
  email: string;
  twitterId: string;
}

export interface adminUserInfoObjType {
  id: number | null;
  username: string;
  email: string;
  hostGathering: GatheringType[];
}

export interface userContextType {
  isLoggedIn: boolean;
  userInfo: adminUserInfoObjType;
  login: () => void;
  logout: () => void;
}
