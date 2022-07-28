import { Link } from "react-router-dom";

import "./style.css";

const Nav = () => {
  return (
    <nav className="nav">
      <Link to="/">Todo List</Link>
      <Link to="/curriculum">Curriculum</Link>
      <Link to="/curriculum/list">Curriculum List</Link>
    </nav>
  );
};

export default Nav;
