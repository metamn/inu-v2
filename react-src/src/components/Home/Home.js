import React, { useState, useEffect } from "react";
import WebFont from "webfontloader";
import styled from "styled-components";
import { stringify } from "flatted";

import Reset from "../Reset";
import TypographicGrid from "../TypographicGrid";
import Spacing from "../Spacing";
import Logo from "../Logo";
import Line from "../Line";
import Categories from "../Categories";
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

  const categoryClickHandler = index => {
    setActiveCategory(index);
    setActiveBullet(0);
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
        <Logo />
        <Line />
        <Categories
          activeCategory={activeCategory}
          categoryClickHandler={categoryClickHandler}
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
