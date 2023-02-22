interface PlaceLatLngObj {
  lat: number;
  lng: number;
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
  placeLatLng: PlaceLatLngObj;
  isFull: boolean;
  participants: ParticipantInfoObj[];
  specialNotes: string;
  organizer: AdminUserInfoObjType;
}

export interface ParticipantInfoObj {
  username: string;
  email: string;
  twitterId: string;
}

export interface AdminUserInfoObjType {
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
  currentUserInfo: AdminUserInfoObjType;
  login: () => void;
  logout: () => void;
  loadingOn: () => void;
  loadingOff: () => void;
  setCurrUser: (userObj: AdminUserInfoObjType) => void;
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
