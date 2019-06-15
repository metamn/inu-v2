import React from "react";
import styled from "styled-components";

import List from "../List";
import ListItem, {
  setListItemActive,
  setListItemVisibility
} from "../ListItem";

const Container = styled.nav``;

const MenuItemCustom = props => {
  const {
    index,
    menuItemText,
    activeCategory,
    activeCategoryIcon,
    categoryClickHandler
  } = props;

  return (
    <Container>
      <List>
        <ListItem
          key={menuItemText}
          className={setListItemActive({
            target: activeCategory,
            index: index
          })}
          visibility={setListItemVisibility({
            target: false,
            index: activeCategoryIcon
          })}
          onClick={() => categoryClickHandler(index)}
        >
          {menuItemText}
        </ListItem>
      </List>
    </Container>
  );
};

export default MenuItemCustom;
