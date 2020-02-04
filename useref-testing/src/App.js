/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useState } from "react";
import useOutsideClick from "./useOutsideClick";
import "./style.scss";
import Theme from "./components/themed";
function App() {
  const [show, setState] = useState(false);
  const ref = useRef();

  useOutsideClick(ref, () => {
    if (show) setState(false);
  });

  return (
    <div className="App">
      <button className="menu-button" onClick={() => setState(!show)}>|||
      </button>
      {show && (
        <div className="menu-body">
          <div className="menu" ref={ref}>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
            </ul>
            <small>(Click ouside to close)</small>
          </div>
        </div>
      )}
      <div>This is content outside the menu</div>
      <Theme/>
    </div>
  );
}

export default App;
