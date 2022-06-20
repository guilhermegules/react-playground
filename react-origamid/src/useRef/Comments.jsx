import React from "react";

const Comments = () => {
  const [comments, setComments] = React.useState(["comment 1", "comment 2"]);
  const [input, setInput] = React.useState("");
  const inputElement = React.useRef();

  React.useEffect(() => {}, []);

  const handleClick = () => {
    setComments([...comments, input]);
    setInput("");
    inputElement.current.focus();
  };

  return (
    <div>
      <ul>
        {comments.map((comment) => (
          <li key={comment}>{comment}</li>
        ))}
      </ul>
      <input
        type="text"
        value={input}
        ref={inputElement}
        onChange={(event) => setInput(event.target.value)}
      />
      <br />
      <button onClick={handleClick}>Send</button>
    </div>
  );
};

export default Comments;
