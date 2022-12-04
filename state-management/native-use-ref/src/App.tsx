import { useEffect, useRef, useState } from "react";
import "./App.css";

interface User {
  id: number;
  name: string;
}

function App() {
  const input = useRef<HTMLInputElement>(null);
  const idRef = useRef(1);
  const [users, setUsers] = useState<User[]>([
    {
      id: idRef.current++,
      name: "john",
    },
    {
      id: idRef.current++,
      name: "Jane",
    },
  ]);

  useEffect(() => {
    if (input.current) {
      input.current.focus();
    }
  }, []);

  const onAddUser = () => {
    if (!input.current) return;

    setUsers([...users, { id: idRef.current++, name: input.current.value }]);
    input.current.value = "";
  };

  return (
    <div className="App">
      <div>
        {users.map(({ name, id }) => (
          <div key={id}>
            {id} - {name}
          </div>
        ))}
      </div>

      <input type="text" ref={input} />

      <button onClick={onAddUser}>Add user</button>
    </div>
  );
}

export default App;
