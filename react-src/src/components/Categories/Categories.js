import React, { useState } from "react";
import styled, { css } from "styled-components";
import gql from "graphql-tag";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import { useQuery } from "./../../hooks";
import { setClassName } from "../../helpers";
import List from "../List";

const Container = styled.nav`
  display: flex;
`;

const ListContainer = styled(List)``;

const ListItem = styled.li`
  font-size: 1.333em;
  cursor: pointer;
  width: 100%;

  // Only the active item is displayed
  ${props =>
    props.hideInactive === "active" &&
    css`
      display: none;
    `};

  // The style of the active item
  ${props =>
    props.className === "active" &&
    css`
      display: flex;
      cursor: default;
    `};

  // All items are displayed
  ${props =>
    props.hideInactive === "inactive" &&
    css`
      margin-bottom: calc(var(--lem) / 2);
      border-bottom: 1px solid lightgray;

      &:hover {
        font-style: italic;
      }
    `};

  // The style of the active item when all items are displayed
  ${props =>
    props.hideInactive === "inactive" &&
    props.className === "active" &&
    css`
      font-style: italic;
    `};
`;

const Icons = styled.div`
  margin-left: var(--lem);
  margin-top: calc(var(--lem) / 3);
`;

const Icon = styled.div`
  display: none;
  align-items: center;
  cursor: pointer;

  ${props =>
    props.className === "active" &&
    css`
      display: flex;
    `};
`;

const query = gql`
  query Categories($hideEmpty: Boolean) {
    categories(where: { hideEmpty: $hideEmpty }) {
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
  const items = data.categories.edges.map(edge => (
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

  // Make sure the first category is marked active at the first load
  if (activeCategory === 0) {
    categoryClickHandler(data.categories.edges[0].node.categoryId);
  }

  return (
    <Container>
      <ListContainer>{items}</ListContainer>
      <Icons>
        <Icon className={hideInactive}>
          <FaChevronDown onClick={() => categoryIconClickHandler()} />
        </Icon>
        <Icon
          className={setClassName({ target: false, index: activeCategoryIcon })}
        >
          <FaChevronUp onClick={() => categoryIconClickHandler()} />
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
