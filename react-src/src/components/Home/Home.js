import React from "react";
import WebFont from "webfontloader";
import styled from "styled-components";

import Title from "../Title";
import Description from "../Description";
import Categories from "../Categories";
import Posts from "../Posts";

WebFont.load({
  google: {
    families: ["Quicksand"]
  }
});

const Container = styled.div`
  font-family: "Quicksand", sans-serif;
`;

const Home = () => {
  return (
    <Container>
      <Title />
      <Description />
      <Categories />
      <Posts />
    </Container>
  );
};

export default Home;
