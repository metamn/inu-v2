import React, { useState } from "react";
import WebFont from "webfontloader";
import styled from "styled-components";

import Reset from "../Reset";
import TypographicGrid from "../TypographicGrid";
import Spacing from "../Spacing";

import Header from "../Header";
import Slider from "../Slider";

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
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeBullet, setActiveBullet] = useState(0);
  const [activeCategoryIcon, setActiveCategoryIcon] = useState(true);

  const categoryClickHandler = index => {
    setActiveCategory(index);
    setActiveBullet(0);
    setActiveCategoryIcon(true);
  };

  const categoryIconClickHandler = () => {
    setActiveCategoryIcon(!activeCategoryIcon);
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
        />
        <Slider
          width="90vw"
          category={activeCategory}
          activeBullet={activeBullet}
          setActiveBullet={setActiveBullet}
        />
      </Container>
    </>
  );
};

export default Home;
