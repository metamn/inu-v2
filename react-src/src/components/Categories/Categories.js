import React from "react";
import styled, { css } from "styled-components";
import gql from "graphql-tag";

import { useQuery } from "./../../hooks";

import List from "../List";
import ListItem, {
  setListItemActive,
  setListItemVisibility
} from "../ListItem";

const Container = styled.nav``;

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

  // Parse categories into a list
  const items = data.categories.edges.map(edge => (
    <ListItem
      key={edge.node.id}
      className={setListItemActive({
        target: activeCategory,
        index: edge.node.categoryId
      })}
      visibility={setListItemVisibility({
        target: false,
        index: activeCategoryIcon
      })}
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
      <List>{items}</List>
    </Container>
  );
};

const Categories = props => {
  const variables = { hideEmpty: true };
  return useQuery(query, markup, variables, props);
};

export default Categories;
