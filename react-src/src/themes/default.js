import React from "react";
import { usePrefersDarkMode } from "../hooks";

// Definitions
const white = "white";
const black = "black";
const gray = "#666";
const lightgray = "lightgray";
const darkgray = "#333";

// Color schemes
const colorSchemes = {
  light: {
    text: black,
    background: white,
    gray: gray,
    placeholder: white,
    borderColor: black,
    cursor: "brutalist_line_SVGicon_cursor2.png",
    inactive: lightgray
  },
  dark: {
    text: white,
    background: black,
    gray: lightgray,
    placeholder: black,
    borderColor: white,
    cursor: "brutalist_line_SVGicon_cursor2-black.png",
    inactive: darkgray
  }
};

// Get a color scheme
const getColorScheme = colorScheme =>
  colorScheme === "light" ? colorSchemes.light : colorSchemes.dark;

// Get a full theme with colors, fonts etc
// When changing font also the `WebFont.load` has to be updated
const getTheme = colorScheme => {
  return {
    colors: getColorScheme(colorScheme),
    fonts: {
      default: "'Major Mono Display', sans-serif;"
    }
  };
};

// Switch from a color scheme to another
const switchThemeFrom = colorScheme => {
  return colorScheme === "light"
    ? { colorScheme: "dark", theme: getTheme("dark") }
    : { colorScheme: "light", theme: getTheme("light") };
};

// Check if the user prefers a dark scheme
const prefersDarkMode = usePrefersDarkMode();

// Set up the default color scheme
const defaultColorScheme = prefersDarkMode ? "light" : "dark";

// Create a theme context
const ThemeContext = React.createContext(switchThemeFrom(defaultColorScheme));

export { getTheme, switchThemeFrom, ThemeContext };
