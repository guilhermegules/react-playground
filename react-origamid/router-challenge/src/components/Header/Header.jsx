import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink className="nav-item" to="" end>
          Produtos
        </NavLink>
        <NavLink className="nav-item" to="contact">
          Contato
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
