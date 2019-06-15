import styled, { css } from "styled-components";

import { setClassName } from "../../helpers";

// Sets the `active` classname for a list item
const setListItemActive = props => {
  return setClassName(props);
};

// Sets the visbility of a list item
const setListItemVisibility = props => {
  return setClassName(props, {
    activeClassName: "visible",
    inactiveClassName: "invisible"
  });
};

// Hide invisible items
const ListItemHideInvisible = css`
  ${props =>
    props.visbility === "invisible" &&
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
    props.visbility === "visible" &&
    css`
      margin-bottom: calc(var(--lem) / 2);
      border-bottom: 1px solid lightgray;

      &:hover {
        font-style: italic;
      }
    `};
`;

// The style of the active item when all items are displayed
const ListItemStyleActiveWhenAllVisible = css`
  ${props =>
    props.visbility === "visible" &&
    props.className === "active" &&
    css`
      font-style: italic;
    `};
`;

// The style of the items
const ListItem = styled.li`
  font-size: 1.333em;
  cursor: pointer;
  width: 100%;

  ${ListItemHideInvisible}
  ${ListItemStyleActive}
  ${ListItemStyleAll}
  ${ListItemStyleActiveWhenAllVisible}
`;

export default ListItem;
export { setListItemActive, setListItemVisibility };
