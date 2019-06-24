import React from "react";
import styled, { css } from "styled-components";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import Icon from "../Icon";
import { setClassName } from "../../helpers";
import Media from "../Media";

const Container = styled.section`
  ${Media.mobile`
	  ${props =>
      props.activeMenuToggleIcon === false &&
      css`
        display: none;
      `};
	`}

  ${Media.tablet`
  	  display: flex;
	  margin-left: var(--lem);
  	`}
`;

const ChevronIcon = css`
  align-items: center;
`;

const MenuItemsToggleIcons = props => {
  const {
    categoryIconClickHandler,
    activeCategoryIcon,
    activeMenuToggleIcon
  } = props;

  return (
    <Container activeMenuToggleIcon={activeMenuToggleIcon}>
      <Icon
        as={ChevronIcon}
        className={setClassName(true, activeCategoryIcon, "active", "hidden")}
      >
        <FiChevronDown onClick={() => categoryIconClickHandler()} />
      </Icon>
      <Icon
        as={ChevronIcon}
        className={setClassName(false, activeCategoryIcon, "active", "hidden")}
      >
        <FiChevronUp onClick={() => categoryIconClickHandler()} />
      </Icon>
    </Container>
  );
};

export default MenuItemsToggleIcons;
