import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const Nav: React.FC = () => {
  return (
    <nav className="nav">
      <Link to="/">Todo List</Link>
      <Link to="/form">Form</Link>
    </nav>
  );
};

export default Nav;
