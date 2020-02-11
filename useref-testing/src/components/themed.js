import React, { useContext } from "react";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = React.createContext(themes.dark);

function Theme() {
  return (
    <ThemeContext.Provider value={themes.light}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar(props) {
  return (
  <div>
    <ThemedDiv/>
  </div>
  );
}

function ThemedDiv() {
  const theme = useContext(ThemeContext);

  return (<div style={{background: theme.background, color: theme.foreground}}>Stylized</div>)
}

export default Theme;