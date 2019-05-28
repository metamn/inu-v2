import React, { useState, useEffect } from "react";
import WebFont from "webfontloader";
import styled from "styled-components";
import { stringify } from "flatted";

import Reset from "../Reset";
import TypographicGrid from "../TypographicGrid";
import Spacing from "../Spacing";
import Logo from "../Logo";
import Line from "../Line";
import { Categories, getCategoryForHome } from "../Categories";
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
  const categoryForHome = getCategoryForHome();
  const [activeCategory, setActiveCategory] = useState(categoryForHome);

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
        <Categories />
        <Slider width="90vw" />
      </Container>
    </>
  );
};

export default Home;
