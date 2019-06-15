import React from "react";
import styled from "styled-components";

import Categories from "../Categories";
import MenuItemCustom from "../MenuItemCustom";
import MenuItemsToggleIcons from "../MenuItemsToggleIcons";
import Media from "../Media";

const Container = styled.section`
  display: flex;
  flex-wrap: nowrap;

  ${Media.mobile`
	  margin-bottom: calc(var(--lem) * 2);
	  `};

  ${Media.tablet`
	  	margin-bottom: 0;
	  	`};
`;

const MenuItems = styled.section``;

const Menu = props => {
  return (
    <Container>
      <MenuItems>
        <Categories {...props} />
        <MenuItemCustom index={-1} menuItemText="Random" {...props} />
        <MenuItemCustom index={-2} menuItemText="Contact" {...props} />
      </MenuItems>
      <MenuItemsToggleIcons {...props} />
    </Container>
  );
};

export default Menu;
