import { BehaviorSubject, map } from "rxjs";
import { PostSubscribeAction, Posts } from "./post.type";

const postsState = new BehaviorSubject<Posts>([]);

export const postStore = {
  subscribe: (next: PostSubscribeAction) =>
    postsState.asObservable().subscribe(next),
  setPosts: (posts: Posts) => {
    postsState.next([...posts]);
  },
  findSelectedPost: (id: number) =>
    postsState
      .asObservable()
      .pipe(map((posts) => posts.find((p) => p.id === id) ?? null)),
};
