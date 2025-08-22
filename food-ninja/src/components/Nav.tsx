import { useState } from "react";
import { SideNav } from "./SideNav";
import "./Nav.css";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <a href="/">
            Food<span>Ninja</span>
          </a>
          <span
            className="menu-trigger"
            onClick={() => setIsOpen(!isOpen)}
          >
            <i className="material-icons sidenav-trigger">menu</i>
          </span>
        </div>
      </nav>
      <SideNav isOpen={isOpen} />
    </>
  );
};
