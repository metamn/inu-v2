import React from "react";

const white = "white";
const black = "black";
const gray = "#666";

const themeColors = {
  light: {
    text: black,
    background: white,
    gray: gray
  },
  dark: {
    text: white,
    background: black,
    gray: gray
  }
};

const themes = mode => {
  return {
    colors: mode === "light" ? themeColors.light : themeColors.dark,
    fonts: {
      default: "'Quicksand', sans-serif;"
    }
  };
};

const ThemeContext = React.createContext({
  theme: themes("light"),
  toggleTheme: () => {}
});

export default ThemeContext;
