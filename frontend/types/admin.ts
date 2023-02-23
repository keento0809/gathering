export interface AdminUserProps {
  currentUser: {
    _id: number | null;
    username: string;
    email: string;
    hostGathering: [] | never[];
  };
}

export interface AdminUserInfoObj {
  _id?: number | null;
  id?: number | null;
  username: string;
  email: string;
  hostGathering: [] | never[];
}
