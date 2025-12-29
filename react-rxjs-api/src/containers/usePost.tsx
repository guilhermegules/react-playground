import { useEffect } from "react";
import { useHttp } from "../hooks/useHttp";
import { Post, Posts } from "../stores/post/post.type";
import { postStore } from "../stores/post/post.store";
import React from "react";

export const usePost = () => {
  const { data, loading } = useHttp<Posts, unknown>(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const [selectedPost, setSelectedPost] = React.useState<Post | null>(null);

  const onSelectPost = (id?: number) => {
    if (!id) return;
    postStore.findSelectedPost(id).subscribe((post) => setSelectedPost(post));
  };

  const clearSelection = () => {
    setSelectedPost(null);
  };

  useEffect(() => {
    if (!data) return;
    postStore.setPosts(data);
  }, [data]);

  return {
    data: {
      posts: data,
      loading,
      selectedPost,
    },
    callback: {
      onSelectPost,
      clearSelection,
    },
  };
};
