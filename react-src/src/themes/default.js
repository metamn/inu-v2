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
    borderColor: black,
    cursor: "brutalist_line_SVGicon_cursor2.png"
  },
  dark: {
    text: white,
    background: black,
    gray: lightgray,
    placeholder: darkgray,
    borderColor: white,
    cursor: "brutalist_line_SVGicon_cursor2-black.png"
  }
};

const getThemeColors = mode =>
  mode === "light" ? themeColors.light : themeColors.dark;

// When changing font also the `WebFont.load` has to be updated
const getTheme = mode => {
  return {
    colors: getThemeColors(mode),
    fonts: {
      default: "'Major Mono Display', sans-serif;"
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
