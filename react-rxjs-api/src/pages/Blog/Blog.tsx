import { usePost } from "../../containers/usePost";
import { BlogPost } from "./components/BlogPost";

export const Blog = () => {
  const { data, callback } = usePost();

  return (
    <div>
      {data.loading && <p>Loading...</p>}
      {data.posts && data.selectedPost === null && (
        <section>
          <h1>Posts</h1>
          {data.posts.map((post) => (
            <BlogPost
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
              onClick={callback.onSelectPost}
            />
          ))}
        </section>
      )}
      {data.selectedPost && (
        <BlogPost
          title={data.selectedPost.title}
          body={data.selectedPost.body}
          id={data.selectedPost.id}
          onClick={callback.clearSelection}
        />
      )}
    </div>
  );
};
