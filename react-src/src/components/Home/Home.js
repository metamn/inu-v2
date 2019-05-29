import React, { useState } from "react";
import WebFont from "webfontloader";
import styled from "styled-components";

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
  font-family: "Quicksand", sans-serif;
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
      <Container>
        <Header
          activeCategory={activeCategory}
          categoryClickHandler={categoryClickHandler}
          activeCategoryIcon={activeCategoryIcon}
          categoryIconClickHandler={categoryIconClickHandler}
          thumbIconClickHandler={thumbIconClickHandler}
        />
        <Display />
      </Container>
    </>
  );
};

export default Home;
