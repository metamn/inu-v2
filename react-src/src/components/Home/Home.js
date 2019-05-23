import React from "react";
import WebFont from "webfontloader";
import styled from "styled-components";

import Title from "../Title";
import Description from "../Description";
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
    <Container>
      <Title />
      <Description />
      <Line />
      <Categories />
      <Posts />
    </Container>
  );
};

export default Home;
