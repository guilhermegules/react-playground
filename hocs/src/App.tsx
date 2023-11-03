import "./App.css";
import { Gists } from "./components/Gists";
import Title from "./components/Title";
import { withLog } from "./hocs/WithLog";

const App = withLog(() => {
  return (
    <div className="app">
      <Title>React HOCs</Title>
      <code>Check the dev console</code>
      <div>
        <Gists />
      </div>
    </div>
  );
});

App.displayName = "App";

export default App;
