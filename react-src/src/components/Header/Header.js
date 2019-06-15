import React from "react";
import styled, { css } from "styled-components";

import Logo from "../Logo";
import Line from "../Line";
import Menu from "../Menu";
import MenuToggleIcons from "../MenuToggleIcons";
import HeaderIcons from "../HeaderIcons";
import Media from "../Media";

const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: flex-start;

  ${Media.mobile`
	  flex-wrap: wrap;
	  justify-content: space-between;
	  `}

  ${Media.tablet`
	  	flex-wrap: nowrap;
	  	justify-content: flex-start;
	  	`}
`;

const ContainerMenu = styled.div`
  ${Media.mobile`
	  width: 100%;
	  flex-direction: column;

	  ${props =>
      props.activeMenuToggleIcon === true &&
      css`
        display: none;
      `};

	  ${props =>
      props.activeMenuToggleIcon === false &&
      css`
        display: flex;
      `};
	`}

  ${Media.tablet`
	  width: auto;
	  display: flex;
	  flex-direction: row;
	  `}
`;

const Header = props => {
  const { logoClickHandler, activeMenuToggleIcon } = props;

  return (
    <Container>
      <Logo logoClickHandler={logoClickHandler} />
      <Line />
      <MenuToggleIcons {...props} />
      <ContainerMenu activeMenuToggleIcon={activeMenuToggleIcon}>
        <Menu {...props} />
        <HeaderIcons {...props} />
      </ContainerMenu>
    </Container>
  );
};

export default Header;
