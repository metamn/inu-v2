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

const getThemeColors = mode =>
  mode === "light" ? themeColors.light : themeColors.dark;

const getTheme = mode => {
  return {
    colors: getThemeColors(mode),
    fonts: {
      default: "'Quicksand', sans-serif;"
    }
  };
};

const ThemeContext = React.createContext({
  mode: "light",
  theme: getTheme("light"),
  toggleTheme: () => {}
});

export { getTheme, ThemeContext };
