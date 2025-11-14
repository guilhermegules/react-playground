import { useActionState } from "react";
import "./App.css";

async function savePost(prevState: string | null, formData: FormData) {
  console.log(prevState);
  const post = formData.get("post")?.toString() || "Default post";

  fetch("https://jsonplaceholder.typicode.com/posts", { method: "POST" }).then(
    () => {
      alert(`Saved post ${post}`);
    }
  );

  return `Saved post ${post}`;
}

function App() {
  const [state, formAction, isPending] = useActionState(savePost, null);

  return (
    <>
      <div style={{ padding: 20 }}>
        <h2>Blog post</h2>

        <form action={formAction}>
          <input
            name="post"
            placeholder="Enter your post title"
            disabled={isPending}
            style={{ marginBottom: 8 }}
          />

          <br />
          <button disabled={isPending}>
            {isPending ? "Sending..." : "Send"}
          </button>
        </form>

        {state && <p>Result: {state}</p>}
      </div>
    </>
  );
}

export default App;
