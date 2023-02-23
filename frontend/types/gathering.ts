import { AdminUserInfoObj } from "./admin";

interface PlaceLatLngObj {
  lat: number;
  lng: number;
}

interface ParticipantInfoObj {
  username: string;
  email: string;
  twitterId: string;
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
  organizer: AdminUserInfoObj;
}

export interface GatheringsArrayType {
  data: GatheringType[];
}

export interface GatheringProps {
  gathering: GatheringType;
}
