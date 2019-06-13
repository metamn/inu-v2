import React from "react";
import styled, { css } from "styled-components";
import gql from "graphql-tag";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import { useQuery } from "./../../hooks";
import { setClassName } from "../../helpers";

import Media from "../Media";
import List from "../List";
import Icon from "../Icon";

const Container = styled.nav`
  display: flex;

  ${Media.tablet`margin-top: calc(var(--lem) * 3);`}
`;

const ListContainer = styled(List)``;

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

// The style of the category dropdown icons
const Icons = styled.div`
  margin-left: var(--lem);
`;

const ChevronIcon = css`
  align-items: center;
`;

// The query definition
const query = gql`
  query Categories($hideEmpty: Boolean) {
    categories(where: { hideEmpty: $hideEmpty, orderby: TERM_ORDER }) {
      edges {
        node {
          id
          categoryId
          name
        }
      }
    }
  }
`;

// Putting together the markup to be rendered
const markup = (data, props) => {
  const {
    activeCategory,
    categoryClickHandler,
    activeCategoryIcon,
    categoryIconClickHandler
  } = props;

  // Icon and menu statuses
  const hideInactive = setClassName({
    target: true,
    index: activeCategoryIcon
  });

  // Parse categories into a list
  let items = data.categories.edges.map(edge => (
    <ListItem
      key={edge.node.id}
      className={setClassName({
        target: activeCategory,
        index: edge.node.categoryId
      })}
      hideInactive={hideInactive}
      onClick={() => categoryClickHandler(edge.node.categoryId)}
    >
      {edge.node.name}
    </ListItem>
  ));

  // Add a `random` category
  items.push(
    <ListItem
      key="random"
      className={setClassName({
        target: activeCategory,
        index: -1
      })}
      hideInactive={hideInactive}
      onClick={() => categoryClickHandler(-1)}
    >
      Random
    </ListItem>
  );

  // Make sure the first category is marked active at the first load
  if (activeCategory === 0) {
    categoryClickHandler(data.categories.edges[0].node.categoryId);
  }

  return (
    <Container>
      <ListContainer>{items}</ListContainer>
      <Icons>
        <Icon as={ChevronIcon} className={hideInactive}>
          <FiChevronDown onClick={() => categoryIconClickHandler()} />
        </Icon>
        <Icon
          as={ChevronIcon}
          className={setClassName({ target: false, index: activeCategoryIcon })}
        >
          <FiChevronUp onClick={() => categoryIconClickHandler()} />
        </Icon>
      </Icons>
    </Container>
  );
};

const Categories = props => {
  const variables = { hideEmpty: true };
  return useQuery(query, markup, variables, props);
};

export default Categories;
