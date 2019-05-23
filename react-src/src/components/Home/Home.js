import React from "react";
import WebFont from "webfontloader";
import styled from "styled-components";

import Reset from "../Reset";
import TypographicGrid from "../TypographicGrid";
import Logo from "../Logo";
import Line from "../Line";
import Categories from "../Categories";
import Posts from "../Posts";

WebFont.load({
  google: {
    families: ["Quicksand"]
  }
});

const Container = styled.div`
  font-family: "Quicksand", sans-serif;
  display: flex;
  flex-wrap: wrap;
`;

const Home = () => {
  return (
    <>
      <Reset />
      <TypographicGrid
        displayVerticalRhytm={true}
        displayHorizontalRhytm={true}
        numberOfHorizontalLines={100}
        numberOfVerticalLines={100}
        lineColor="#666"
      />
      <Container>
        <Logo />
        <Line />
        <Categories />
        <Posts />
      </Container>
    </>
  );
};

export default Home;
