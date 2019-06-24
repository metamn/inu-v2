import React from "react";
import styled, { css } from "styled-components";
import { FiMenu, FiX } from "react-icons/fi";

import Logo from "../Logo";
import Line from "../Line";
import Menu from "../Menu";
import IconToggle from "../IconToggle";
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

const MenuContainer = styled.div`
  ${Media.mobile`
	  width: 100%;
	  flex-direction: column;
	  margin-top: calc(var(--lem) * 2);

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
	  margin-top: calc(var(--lem) * 3);
	  `}
`;

const MenuToggleIcons = styled.div`
  ${Media.mobile`display: flex`}
  ${Media.tablet`display: none`}
`;

const Header = props => {
  const {
    logoClickHandler,
    activeMenuToggleIcon,
    menuToggleIconClickHandler
  } = props;

  const icon1 = <FiMenu onClick={() => menuToggleIconClickHandler()} />;
  const icon2 = <FiX onClick={() => menuToggleIconClickHandler()} />;

  return (
    <Container>
      <Logo logoClickHandler={logoClickHandler} />
      <Line />
      <MenuToggleIcons>
        <IconToggle
          setClassNameCondition={activeMenuToggleIcon}
          icon1={icon1}
          icon2={icon2}
        />
      </MenuToggleIcons>
      <MenuContainer activeMenuToggleIcon={activeMenuToggleIcon}>
        <Menu {...props} />
        <HeaderIcons {...props} />
      </MenuContainer>
    </Container>
  );
};

export default Header;
