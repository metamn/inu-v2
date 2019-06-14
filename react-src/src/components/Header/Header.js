import React, { useState } from "react";
import styled from "styled-components";

import Logo from "../Logo";
import Line from "../Line";
import Menu from "../Menu";
import MenuIcons from "../MenuIcons";
import HeaderIcons from "../HeaderIcons";
import Media from "../Media";

const Container = styled.header`
  display: flex;
  align-items: flex-start;

  ${Media.mobile`flex-direction: row;`}
  ${Media.tablet`flex-direction: row`}
`;

const Header = props => {
  const {
    thumbIconClickHandler,
    sunIconClickHandler,
    logoClickHandler
  } = props;

  return (
    <Container>
      <Logo logoClickHandler={logoClickHandler} />
      <Line />
      <Menu {...props} />
      <MenuIcons {...props} />
      <HeaderIcons {...props} />
    </Container>
  );
};

export default Header;
