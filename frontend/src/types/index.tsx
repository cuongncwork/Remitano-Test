export type User = {
  email: string;
};

export type StateProp = {
  auth: { isLoggedIn: boolean; user: User };
  home: { videos: Videos[] };
};

export type LoginParams = {
  email: string;
  password: string;
};

export type Videos = {
  id: number;
  title: number;
  url: string;
};
