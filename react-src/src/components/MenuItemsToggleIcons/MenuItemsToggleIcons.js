import React from "react";
import styled, { css } from "styled-components";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import Icon from "../Icon";
import { setClassName } from "../../helpers";

const Container = styled.section`
  margin-left: var(--lem);
`;

const ChevronIcon = css`
  align-items: center;
`;

const MenuItemsToggleIcons = props => {
  const { categoryIconClickHandler, activeCategoryIcon } = props;

  return (
    <Container>
      <Icon as={ChevronIcon} className={setClassName(true, activeCategoryIcon)}>
        <FiChevronDown onClick={() => categoryIconClickHandler()} />
      </Icon>
      <Icon
        as={ChevronIcon}
        className={setClassName(false, activeCategoryIcon)}
      >
        <FiChevronUp onClick={() => categoryIconClickHandler()} />
      </Icon>
    </Container>
  );
};

export default MenuItemsToggleIcons;
