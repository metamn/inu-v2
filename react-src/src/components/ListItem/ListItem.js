import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { stringify } from "flatted";

import { ThemeContext } from "../../themes/default.js";
import { setClassName } from "../../helpers";

// Sets the `active` classname for a list item
const setListItemActive = props => {
  const { target, index } = props;
  return setClassName(target, index);
};

// Sets the visbility of a list item
const setListItemVisibility = props => {
  const { target, index } = props;
  return setClassName(target, index, "visible", "invisible");
};

// Hide invisible items
const ListItemHideInvisible = css`
  ${props =>
    props.visibility === "invisible" &&
    css`
      display: none;
    `};
`;

// Style the active item
const ListItemStyleActive = css`
  ${props =>
    props.className === "active" &&
    css`
      display: flex;
      cursor: default;
    `};
`;

// The style of items when all of them are displayed
const ListItemStyleAll = css`
  ${props =>
    props.visibility === "visible" &&
    css`
      margin-bottom: calc(var(--lem) / 2);
      padding-bottom: calc(var(--lem) / 2);
      ${props =>
        props.theme.colors.borderColor &&
        css`
          border-bottom: 1px solid ${props.theme.colors.borderColor};
        `};

      &:hover {
        font-style: italic;
      }
    `};
`;

// The style of the active item when all items are displayed
const ListItemStyleActiveWhenAllVisible = css`
  ${props =>
    props.visibility === "visible" &&
    props.className === "active" &&
    css`
      font-style: italic;
    `};
`;

// The style of the items
const ListItemStyle = styled.li`
  font-size: 1.333em;
  cursor: pointer;
  width: 100%;

  ${ListItemHideInvisible}
  ${ListItemStyleActive}
  ${ListItemStyleAll}
  ${ListItemStyleActiveWhenAllVisible}
`;

// The List Item component
const ListItem = props => {
  const { children } = props;
  const themeContext = useContext(ThemeContext);
  const { theme } = themeContext;

  return (
    <ListItemStyle theme={theme} {...props}>
      {children}
    </ListItemStyle>
  );
};

export default ListItem;
export { setListItemActive, setListItemVisibility };
