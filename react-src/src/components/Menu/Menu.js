import React from "react";
import styled, { css } from "styled-components";

import Categories from "../Categories";
import Random from "../Random";

const Container = styled.section``;

const Menu = props => {
  return (
    <Container>
      <Categories {...props} />
      <Random {...props} />
    </Container>
  );
};

export default Menu;
