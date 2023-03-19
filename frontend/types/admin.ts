interface User {
  _id?: number | null;
  username: string;
  email: string;
  hostGathering: [] | never;
}

export interface AdminUser extends User {
  id?: number | null;
}

// TODO:confirm if never type is really necessary or not
export interface AdminUserProps {
  currentUser: {
    _id: number | null;
    username: string;
    email: string;
    hostGathering: [] | never;
  };
}

export interface AdminUserInfoObj {
  _id?: number | null;
  id?: number | null;
  username: string;
  email: string;
  hostGathering: [] | never;
}
