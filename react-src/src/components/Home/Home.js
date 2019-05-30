import React, { useState, useContext } from "react";
import WebFont from "webfontloader";
import styled, { createGlobalStyle } from "styled-components";
import { stringify } from "flatted";

import { useDarkMode } from "../../hooks";

import Reset from "../Reset";
import TypographicGrid from "../TypographicGrid";
import Spacing from "../Spacing";

import Header from "../Header";
import Slider from "../Slider";
import Thumbs from "../Thumbs";
import Blank from "../Blank";

import theme from "../../themes/light.js";

WebFont.load({
  google: {
    families: ["Quicksand"]
  }
});

const DarkMode = createGlobalStyle`
	body.dark-mode {
		background: ${props => props.theme.colors.text};
		color: ${props => props.theme.colors.background};
	}
`;

const Container = styled.div`
  font-family: ${props => props.theme.fonts.default};
  display: flex;
  flex-wrap: wrap;

  ${Spacing({ property: "padding" })}
`;

const Home = () => {
  // Which category to display
  const [activeCategory, setActiveCategory] = useState(0);

  // Which bullet is active
  const [activeBullet, setActiveBullet] = useState(0);

  // The status of the category dropdown icons
  const [activeCategoryIcon, setActiveCategoryIcon] = useState(true);

  // How to display images
  const [displayMode, setDisplayMode] = useState(0);

  // Set dark mode
  const [darkMode, setDarkMode] = useDarkMode();

  const categoryClickHandler = index => {
    setActiveCategory(index);
    setActiveBullet(0);
    setActiveCategoryIcon(true);
    setDisplayMode(0);
  };

  const categoryIconClickHandler = () => {
    setActiveCategoryIcon(!activeCategoryIcon);
    setDisplayMode(2);
  };

  const thumbIconClickHandler = () => {
    displayMode === 1 ? setDisplayMode(0) : setDisplayMode(1);
  };

  const Display = () => {
    switch (displayMode) {
      case 0:
        return (
          <Slider
            width="90vw"
            category={activeCategory}
            activeBullet={activeBullet}
            setActiveBullet={setActiveBullet}
          />
        );
        break;
      case 1:
        return <Thumbs category={activeCategory} />;
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
      <DarkMode theme={theme} />
      <Container theme={theme}>
        <Header
          activeCategory={activeCategory}
          categoryClickHandler={categoryClickHandler}
          activeCategoryIcon={activeCategoryIcon}
          categoryIconClickHandler={categoryIconClickHandler}
          thumbIconClickHandler={thumbIconClickHandler}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        <Display />
      </Container>
    </>
  );
};

export default Home;
