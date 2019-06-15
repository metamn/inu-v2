import React from "react";
import styled, { css } from "styled-components";
import { FiMenu, FiX } from "react-icons/fi";

import Icon from "../Icon";
import Media from "../Media";
import { setClassName } from "../../helpers";

const Container = styled.div`
  ${Media.mobile`display: flex`}
  ${Media.tablet`display: none`}
`;

const MenuIcon = css`
  ${props =>
    props.className === "active" &&
    css`
      display: flex;
    `};

  ${props =>
    props.className === "inactive" &&
    css`
      display: none;
    `};
`;

const MenuToggleIcons = props => {
  const { activeMenuToggleIcon, menuToggleIconClickHandler } = props;

  return (
    <Container>
      <Icon as={MenuIcon} className={setClassName(true, activeMenuToggleIcon)}>
        <FiMenu onClick={() => menuToggleIconClickHandler()} />
      </Icon>
      <Icon as={MenuIcon} className={setClassName(false, activeMenuToggleIcon)}>
        <FiX onClick={() => menuToggleIconClickHandler()} />
      </Icon>
    </Container>
  );
};

export default MenuToggleIcons;
