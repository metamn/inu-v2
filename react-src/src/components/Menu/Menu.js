import React from "react";
import styled from "styled-components";

import Categories from "../Categories";
import MenuItemCustom from "../MenuItemCustom";
import MenuItemsToggleIcons from "../MenuItemsToggleIcons";

const Container = styled.section`
  display: flex;
  flex-wrap: nowrap;
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
