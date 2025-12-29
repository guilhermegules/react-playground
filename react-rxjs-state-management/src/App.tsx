import { FormEvent, useEffect, useState } from "react";
import { chatStore } from "./store/chat/chat";

function App() {
  const [chat, setChat] = useState(chatStore.initialState);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = event.currentTarget.message.value;
    const user = event.currentTarget.user.value;
    chatStore.sendMessage({ message, user });
    event.currentTarget.reset();
  };

  useEffect(() => {
    chatStore.subscribe(setChat);
    chatStore.init();
  }, []);

  return (
    <>
      <h1>Chat</h1>
      <div>
        <h3>Messages: {chat.newDataCount}</h3>
        {chat.data.map((data, index) => (
          <div key={index * Math.random() * 10000}>
            <span>message from: {data.user}</span>
            <p>{data.message}</p>
          </div>
        ))}
      </div>
      <form onSubmit={onSubmit}>
        <select name="user" id="user">
          <option value="user1">User 1</option>
          <option value="user2">User 2</option>
        </select>
        <input
          type="text"
          placeholder="Type here..."
          name="message"
          id="message"
        />
        <button type="submit">Send</button>
        <button onClick={chatStore.clearChat} type="button">
          Clear Chat
        </button>
      </form>
    </>
  );
}

export default App;
