import React, { useRef, useState } from "react";
import useOutsideClick from "./UseOutsideClick";
import "./style.scss";
import FocusInput from "./components/FocusInput";
function App() {
  const [show, setState] = useState(false);
  const ref = useRef();

  useOutsideClick(ref, () => {
    if (show) setState(false);
  });

  return (
    <React.StrictMode>
      <div className="App">
        <button className="menu-button" onClick={() => setState(!show)}>
          |||
        </button>
        {show && (
          <div className="menu-body">
            <div className="menu" ref={ref}>
              <ul>
                <li>Home</li>
                <li>Product</li>
                <li>About us</li>
              </ul>
              <small>(Click ouside to close)</small>
            </div>
          </div>
        )}
        <div>This is content outside the menu</div>
        <FocusInput/>
      </div>
    </React.StrictMode>
  );
}

export default App;
