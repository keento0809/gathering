interface PlaceLatLngObj {
  lat: number;
  lng: number;
}

interface ParticipantInfoObj {
  username: string;
  email: string;
  twitterId: string;
}

interface AdminUserInfoObjType {
  _id?: number | null;
  id?: number | null;
  username: string;
  email: string;
  hostGathering: [] | never[];
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

export interface GatheringsArrayType {
  data: GatheringType[];
}

export interface GatheringProps {
  gathering: GatheringType;
}
