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
  isMaximum?: boolean;
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

export interface placeLatLngObj {
  lat: number;
  lng: number;
}

export interface StaticImageData {
  src: string;
  height?: number;
  width?: number;
  placeholder?: string;
}

export interface GatheringType {
  _id: number | null;
  title: string;
  image?: string;
  headline: string;
  description: string;
  capacity: number;
  date: string;
  schedule: string;
  timeSchedule: string;
  placeName: string;
  placeLatLng: placeLatLngObj;
  isFull: boolean;
  participants: participantInfoObj[];
  specialNotes: string;
  organizer: adminUserInfoObjType;
}

export interface GatheringProps {
  gathering: GatheringType;
}

export interface GatheringsArrayType {
  data: GatheringType[];
}

export interface participantInfoObj {
  username: string;
  email: string;
  twitterId: string;
}

export interface adminUserInfoObjType {
  _id?: number | null;
  id?: number | null;
  username: string;
  email: string;
  hostGathering: [] | never[];
}

export interface adminUserProps {
  currentUser: {
    _id: number | null;
    username: string;
    email: string;
    hostGathering: [] | never[];
  };
}

export interface userContextType {
  isLoggedIn: boolean;
  isLoading: boolean;
  currentUserInfo: adminUserInfoObjType;
  login: () => void;
  logout: () => void;
  loadingOn: () => void;
  loadingOff: () => void;
  setCurrUser: (userObj: adminUserInfoObjType) => void;
  resetCurrUser: () => void;
}

export interface loadingContextType {
  isLoading: boolean;
  setIsLoading: (bool: boolean) => void;
}

export interface MainAlertProps {
  text: string;
  isAlert: boolean;
  setIsAlert: Function;
}

export interface CurrentUserProps {
  _id: string;
  name: string;
  email: string;
  image: string;
  emailVerified: null | string;
}

export interface MapProps extends google.maps.MapOptions {
  style: { [key: string]: string };
  children?: React.ReactNode;
  onClick?: (e: google.maps.MapMouseEvent) => void;
  onIdle?: (map: google.maps.Map) => void;
}

export interface locationObj {
  lat: number;
  lng: number;
}

export interface latLngProps {
  placeLatLng: {
    lat: number;
    lng: number;
  };
  placeName: string;
}
