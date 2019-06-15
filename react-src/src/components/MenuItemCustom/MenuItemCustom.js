import React from "react";
import styled, { css } from "styled-components";

import List from "../List";
import ListItem, {
  setListItemActive,
  setListItemVisibility
} from "../ListItem";
import { getListItemVisibility } from "../Categories";

const Container = styled.nav``;

// Adds top margin for custom list items
const ListItemCustom = styled(ListItem)`
  ${props =>
    props.className === "inactive" &&
    css`
      margin-top: calc(var(--lem) * 1.5);
    `};
`;

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
        <ListItemCustom
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
        </ListItemCustom>
      </List>
    </Container>
  );
};

export default MenuItemCustom;
