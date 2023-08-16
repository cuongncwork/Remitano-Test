export type User = {
  id: number;
  email: string;
};

export type Vote = {
  id: number;
  vote_type: number;
  user_id: number;
  video_id: number;
};

export type StateProp = {
  auth: { isLoggedIn: boolean; user: User };
  home: { videos: Video[]; loading: boolean; error: string };
};

export type LoginParams = {
  email: string;
  password: string;
};

export type ShareParams = {
  video: { url: string; user_id: number };
};

export type VoteParams = {
  vote: { id?: number; vote_type: number; video_id: number; user_id: number };
};

export type Video = {
  id: number;
  url: string;
  title: string;
  description: string;
  embed_html: string;
  user: User;
  votes: Vote[];
};
