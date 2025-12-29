export type Post = {
  userId: string;
  id: number;
  title: string;
  body: string;
};

export type Posts = Post[];

export type PostSubscribeAction = (value: Posts) => void;
