import React, { useState } from "react";
import styled, { css } from "styled-components";

import Logo from "../Logo";
import Line from "../Line";
import Menu from "../Menu";
import MenuIcons from "../MenuIcons";
import HeaderIcons from "../HeaderIcons";
import Media from "../Media";

const StyledHeaderIcons = styled(HeaderIcons)``;

const ContainerMobile = css`
  ${Media.mobile`
	  ${Line} {
		  display: none;
	  }

	  ${StyledHeaderIcons} {
		  display: none;
		  background: black;
	  }
	`}
`;

const Container = styled.header`
  display: flex;
  align-items: flex-start;

  ${ContainerMobile}
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
