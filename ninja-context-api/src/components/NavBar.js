import React, { useContext } from "react";
// import { ThemeContext } from "../contexts/ThemeContext";
import { BookContext } from "../contexts/BookContext";

const NavBar = () => {
  // const { isLightTheme, light, dark } = useContext(ThemeContext);
  // const theme = isLightTheme ? light : dark;
  const { books } = useContext(BookContext);
  
  return (
    <nav
      className="nav-bar"
      // style={{ background: theme.ui, color: theme.text }}
    >
      <h1> Guilherme Reading List</h1>
      <p>Currently you have {books.length} books to geth through.</p>
    </nav>
  );
};

export default NavBar;
