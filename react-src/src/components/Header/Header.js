import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Spacing from "../Spacing";
import Logo from "../Logo";
import Line from "../Line";
import Categories from "../Categories";

const Container = styled.header``;

const Header = props => {
  return (
    <Container>
      <Logo />
      <Line />
      <Categories {...props} />
    </Container>
  );
};

export default Header;
