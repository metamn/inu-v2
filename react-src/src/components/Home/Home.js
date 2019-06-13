import React, { useState, useContext } from "react";
import WebFont from "webfontloader";
import styled from "styled-components";
import { stringify } from "flatted";

import {
  getTheme,
  switchThemeFrom,
  ThemeContext
} from "../../themes/default.js";

import Reset from "../Reset";
import TypographicGrid from "../TypographicGrid";
import Spacing from "../Spacing";

import Header from "../Header";
import Slider from "../Slider";
import Thumbs from "../Thumbs";
import Blank from "../Blank";

WebFont.load({
  google: {
    families: ["Quicksand"]
  }
});

const Container = styled.div`
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fonts.default};
  display: flex;
  flex-wrap: wrap;

  ${Spacing({ property: "padding" })}
`;

const Home = () => {
  // Which category to display
  const [activeCategory, setActiveCategory] = useState(0);

  // Which category dropdown icon is active
  const [activeCategoryIcon, setActiveCategoryIcon] = useState(true);

  // Which slide is active
  const [activeSlide, setActiveSlide] = useState(0);

  // How to display images
  const [displayMode, setDisplayMode] = useState(0);

  // Theming
  const themeContext = useContext(ThemeContext);
  const [currentTheme, setCurrentTheme] = useState(themeContext);

  // Click on a category
  const categoryClickHandler = index => {
    setActiveCategory(index);
    setActiveSlide(0);
    setActiveCategoryIcon(true);
    setDisplayMode(0);
  };

  // Click on the category icon
  const categoryIconClickHandler = () => {
    setActiveCategoryIcon(!activeCategoryIcon);
    setDisplayMode(2);
  };

  // Click on the thumbnails icon
  const thumbIconClickHandler = () => {
    displayMode === 1 ? setDisplayMode(0) : setDisplayMode(1);
  };

  // Click on the theme icon
  const toggleTheme = () => {
    const newTheme = switchThemeFrom(currentTheme.mode);
    setCurrentTheme(newTheme);
  };

  // Click on a thumbnail
  const thumbClickHandler = index => {
    setDisplayMode(0);
    setActiveSlide(index);
  };

  // Click on the logo
  const logoClickHandler = () => {
    setActiveCategory(0);
    setActiveSlide(0);
    setDisplayMode(0);
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
          />
        );
        break;
      case 1:
        return (
          <Thumbs
            category={activeCategory}
            activeSlide={activeSlide}
            thumbClickHandler={thumbClickHandler}
          />
        );
      case 2:
      default:
        return <Blank />;
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
          />
          <Display />
        </Container>
      </ThemeContext.Provider>
    </>
  );
};

export default Home;
