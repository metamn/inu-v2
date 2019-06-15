import React from "react";
import styled from "styled-components";

import List from "../List";
import ListItem, {
  setListItemActive,
  setListItemVisibility
} from "../ListItem";
import { getListItemVisibility } from "../Categories";

const Container = styled.nav``;

const MenuItemCustom = props => {
  const {
    index,
    menuItemText,
    activeCategory,
    activeCategoryIcon,
    categoryClickHandler,
    activeMenuToggleIcon
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
          visibility={getListItemVisibility(
            activeMenuToggleIcon,
            activeCategoryIcon
          )}
          onClick={() => categoryClickHandler(index)}
        >
          {menuItemText}
        </ListItem>
      </List>
    </Container>
  );
};

export default MenuItemCustom;
