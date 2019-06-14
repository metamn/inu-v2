import styled, { css } from "styled-components";

// Hide inactive items
const ListItemHideInactive = css`
  ${props =>
    props.hideInactive === "active" &&
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
const ListItemShowInactive = css`
  ${props =>
    props.hideInactive === "inactive" &&
    css`
      margin-bottom: calc(var(--lem) / 2);
      border-bottom: 1px solid lightgray;

      &:hover {
        font-style: italic;
      }
    `};
`;

// The style of the active item when all items are displayed
const ListItemStyleActiveWhenShowInactive = css`
  ${props =>
    props.hideInactive === "inactive" &&
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

  ${ListItemHideInactive}
  ${ListItemStyleActive}
  ${ListItemShowInactive}
  ${ListItemStyleActiveWhenShowInactive}
`;

export default ListItem;
