import React from "react";
import styled, { css } from "styled-components";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import Categories from "../Categories";
import MenuItemCustom from "../MenuItemCustom";
import Icon from "../Icon";
import { setClassName } from "../../helpers";

const Container = styled.section`
  display: flex;
  flex-wrap: nowrap;
`;

const MenuItems = styled.section``;
const MenuItemsIcons = styled.section`
  margin-left: var(--lem);
`;

const ChevronIcon = css`
  align-items: center;
`;

const Menu = props => {
  const { categoryIconClickHandler, activeCategoryIcon } = props;

  return (
    <Container>
      <MenuItems>
        <Categories {...props} />
        <MenuItemCustom index={-1} menuItemText="Random" {...props} />
        <MenuItemCustom index={-2} menuItemText="Contact" {...props} />
      </MenuItems>
      <MenuItemsIcons>
        <Icon
          as={ChevronIcon}
          className={setClassName({ target: true, index: activeCategoryIcon })}
        >
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
