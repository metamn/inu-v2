import React, { useState, useContext } from "react";
import WebFont from "webfontloader";
import styled from "styled-components";
import { Helmet } from "react-helmet";

import { switchThemeFrom, ThemeContext } from "../../themes/default.js";
import { useLocalStorage, usePrefersDarkMode } from "../../hooks";

import Reset from "../Reset";
import TypographicGrid from "../TypographicGrid";
import Spacing from "../Spacing";
import Placeholder from "../Placeholder";

import Header from "../Header";
import Slider from "../Slider";
import Thumbs from "../Thumbs";
import Contact from "../Contact";

WebFont.load({
  google: {
    families: ["Major+Mono+Display"]
  }
});

const Container = styled.div`
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fonts.default};

  display: flex;
  flex-direction: column;

  min-height: 100vh;

  ${Spacing({ property: "padding" })}
`;

const Home = () => {
  // Which category to display
  const [activeCategory, setActiveCategory] = useState(0);

  // Which category dropdown icon is active
  // - true: ChevronDown
  const [activeCategoryIcon, setActiveCategoryIcon] = useState(true);

  // Which menu toggle icon is active
  // - true: Menu
  const [activeMenuToggleIcon, setActiveMenuToggleIcon] = useState(true);

  // Which slide is active
  const [activeSlide, setActiveSlide] = useState(0);

  // Is the slideshow active?
  const [slideshowActive, setSlideshowActive] = useState(false);

  // How to display images
  const [displayMode, setDisplayMode] = useState(0);

  // Previous image display mode
  // - this is used in the category icon click
  // - it restores either the thumb view or the slider view ...
  // - ...as it were before the click
  const [previousDisplayMode, setPreviousDisplayMode] = useState(0);

  // Theming
  const themeContext = useContext(ThemeContext);
  const [currentTheme, setCurrentTheme] = useState(themeContext);
  // Use the `useLocalStorage` hook to persist theme through a page refresh.
  const [currentThemeSaved, setCurrentThemeSaved] = useLocalStorage(
    "current-theme"
  );

  // Click on a category
  const categoryClickHandler = index => {
    setActiveCategory(index);
    setActiveCategoryIcon(true);
    setActiveMenuToggleIcon(true);
    setPreviousDisplayMode(0);

    switch (index) {
      case -2:
        // Contact
        setSlideshowActive(false);
        setDisplayMode(-2);
        break;
      case -1:
        // Random
        setSlideshowActive(true);
        setActiveSlide(0);
        setDisplayMode(0);
        break;
      default:
        setSlideshowActive(false);
        setActiveSlide(0);
        setDisplayMode(0);
    }
  };

  // Click on the category dropdown icon
  const categoryIconClickHandler = () => {
    setActiveCategoryIcon(!activeCategoryIcon);

    if (activeCategoryIcon) {
      // ChevronDown clicked ...
      setDisplayMode(2);
    } else {
      // ChevronUp clicked ...
      setDisplayMode(previousDisplayMode);
    }
  };

  // Click on the thumbnails icon
  const thumbIconClickHandler = () => {
    // On `Contact` and `Random` we don't handle this click
    if ([-1, -2].includes(activeCategory)) return;

    // Change the display mode
    const newDisplayMode = displayMode === 1 ? 0 : 1;
    setDisplayMode(newDisplayMode);

    // Save the current display mode
    setPreviousDisplayMode(newDisplayMode);

    // Hide the category menu
    setActiveCategoryIcon(true);

    // ???
    setActiveMenuToggleIcon(true);
  };

  // Click on a thumbnail
  const thumbClickHandler = index => {
    setDisplayMode(0);
    setActiveSlide(index);
    setPreviousDisplayMode(0);
  };

  // Click on the theme icon
  const toggleTheme = () => {
    const currentColorScheme =
      typeof currentThemeSaved !== "undefined"
        ? currentThemeSaved
        : currentTheme.colorScheme;

    console.log("currentColorScheme:" + currentColorScheme);
    const newTheme = switchThemeFrom(currentColorScheme);

    setCurrentTheme(newTheme);
    setCurrentThemeSaved(currentColorScheme);

    if (!activeMenuToggleIcon) {
      setActiveMenuToggleIcon(true);
      setDisplayMode(0);
    }
  };

  // Click on the logo
  const logoClickHandler = () => {
    setActiveCategory(0);
    setActiveSlide(0);
    setDisplayMode(0);
  };

  // Click on the menu toggle icon
  const menuToggleIconClickHandler = () => {
    setActiveMenuToggleIcon(!activeMenuToggleIcon);

    if (activeMenuToggleIcon) {
      setDisplayMode(3);
    } else {
      setDisplayMode(0);
    }
  };

  // The different display modes
  const Display = () => {
    switch (displayMode) {
      case 0:
        return (
          <Slider
            width="90vw"
            height="70vh"
            category={activeCategory}
            activeSlide={activeSlide}
            setActiveSlide={setActiveSlide}
            slideshowActive={slideshowActive}
          />
        );
      case 1:
        return (
          <Thumbs
            category={activeCategory}
            activeSlide={activeSlide}
            thumbClickHandler={thumbClickHandler}
          />
        );
      case -2:
        return <Contact />;
      case 2:
      default:
        return <Placeholder type="blank" />;
    }
  };

  return (
    <>
      <Reset />
      <TypographicGrid
        displayVerticalRhytm={false}
        displayHorizontalRhytm={false}
        numberOfHorizontalLines={100}
        numberOfVerticalLines={100}
        lineColor="#666"
      />
      <Helmet>
        <meta name="description" content="Portfolio" />
      </Helmet>
      <ThemeContext.Provider value={currentTheme}>
        <Container theme={currentTheme.theme}>
          <Header
            activeCategory={activeCategory}
            categoryClickHandler={categoryClickHandler}
            activeCategoryIcon={activeCategoryIcon}
            categoryIconClickHandler={categoryIconClickHandler}
            thumbIconClickHandler={thumbIconClickHandler}
            sunIconClickHandler={toggleTheme}
            logoClickHandler={logoClickHandler}
            activeMenuToggleIcon={activeMenuToggleIcon}
            menuToggleIconClickHandler={menuToggleIconClickHandler}
          />
          <Display />
        </Container>
      </ThemeContext.Provider>
    </>
  );
};

export default Home;
