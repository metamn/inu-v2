import React from "react";
import styled from "styled-components";

import Logo from "../Logo";
import Line from "../Line";
import Menu from "../Menu";
import MenuToggleIcons from "../MenuToggleIcons";
import HeaderIcons from "../HeaderIcons";

const Container = styled.header`
  display: flex;
  align-items: flex-start;
`;

const Header = props => {
  const { logoClickHandler } = props;

  return (
    <Container>
      <Logo logoClickHandler={logoClickHandler} />
      <Line />
      <Menu {...props} />
      <MenuToggleIcons {...props} />
      <HeaderIcons {...props} />
    </Container>
  );
};

export default Header;
