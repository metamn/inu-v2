import React from "react";
import styled, { css } from "styled-components";
import gql from "graphql-tag";

import { useQuery } from "./../../hooks";
import { setClassName } from "../../helpers";
import List from "../List";

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

const ListItem = styled.li`
  font-size: 1.333em;
  cursor: pointer;

  ${props =>
    props.className === "active" &&
    css`
      color: white;
      background: black;
    `};
`;

const markup = (data, props) => {
  const { activeCategory, categoryClickHandler } = props;

  const items = data.categories.edges.map(edge => (
    <ListItem
      key={edge.node.id}
      className={setClassName({
        target: activeCategory,
        index: edge.node.categoryId
      })}
      onClick={() => categoryClickHandler(edge.node.categoryId)}
    >
      {edge.node.name}
    </ListItem>
  ));

  return <List>{items}</List>;
};

const Categories = props => {
  const variables = { hideEmpty: true };
  return useQuery(query, markup, variables, props);
};

export default Categories;
