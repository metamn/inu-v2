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
// NOTE: This is a Styled component bug
// When `<ListItemCustom>` is used instead of `<ListItem>` the active item name is not displayed
// The margin top therefore is moved into the `ListItem` component
/*
const ListItemCustom = styled(ListItem)`
  ${props =>
    props.className === "inactive" &&
    css`
      margin-top: calc(var(--lem) * 1.5);
    `};
`;
*/

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
          topMargin={true}
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
