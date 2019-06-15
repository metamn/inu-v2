import React from "react";

const white = "white";
const black = "black";
const gray = "#666";
const lightgray = "lightgray";
const darkgray = "#333";

const themeColors = {
  light: {
    text: black,
    background: white,
    gray: gray,
    placeholder: lightgray,
    borderColor: black
  },
  dark: {
    text: white,
    background: black,
    gray: lightgray,
    placeholder: darkgray,
    borderColor: white
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
