import React from "react";
import styled, { css } from "styled-components";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import Categories from "../Categories";
import Random from "../Random";
import Icon from "../Icon";
import { setClassName } from "../../helpers";

const Container = styled.section``;
const MenuItems = styled.section``;
const MenuItemsIcons = styled.section`
  margin-left: var(--lem);
`;

const ChevronIcon = css`
  align-items: center;
`;

const Menu = props => {
  const { categoryIconClickHandler, activeCategoryIcon } = props;

  // Icon and menu statuses
  const hideInactive = setClassName({
    target: true,
    index: activeCategoryIcon
  });

  return (
    <Container>
      <MenuItems>
        <Categories {...props} />
        <Random {...props} />
      </MenuItems>
      <MenuItemsIcons>
        <Icon as={ChevronIcon} className={hideInactive}>
          <FiChevronDown onClick={() => categoryIconClickHandler()} />
        </Icon>
        <Icon
          as={ChevronIcon}
          className={setClassName({ target: false, index: activeCategoryIcon })}
        >
          <FiChevronUp onClick={() => categoryIconClickHandler()} />
        </Icon>
      </MenuItemsIcons>
    </Container>
  );
};

export default Menu;
