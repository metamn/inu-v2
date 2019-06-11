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

const switchThemeFrom = mode => {
  return mode === "light"
    ? { mode: "dark", theme: getTheme("dark") }
    : { mode: "light", theme: getTheme("light") };
};

const ThemeContext = React.createContext(switchThemeFrom("dark"));

export { getTheme, switchThemeFrom, ThemeContext };
