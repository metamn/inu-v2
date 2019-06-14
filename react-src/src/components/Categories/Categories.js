import React from "react";
import styled, { css } from "styled-components";
import gql from "graphql-tag";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import { useQuery } from "./../../hooks";
import { setClassName } from "../../helpers";

import Media from "../Media";
import List from "../List";
import ListItem from "../ListItem";
import Icon from "../Icon";

const Container = styled.nav`
  display: flex;

  ${Media.tablet`margin-top: calc(var(--lem) * 3);`}
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

  // Make sure the first category is marked active at the first load
  if (activeCategory === 0) {
    categoryClickHandler(data.categories.edges[0].node.categoryId);
  }

  return (
    <Container>
      <List>{items}</List>
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
