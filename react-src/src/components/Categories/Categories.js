import React from "react";
import styled, { css } from "styled-components";
import gql from "graphql-tag";
import { useQuery } from "./../../hooks";
import List from "../List";

const query = gql`
  query Categories {
    categories {
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

  const setClassName = index => {
    return index === activeCategory ? "active" : "inactive";
  };

  const items = data.categories.edges.map((edge, index) => (
    <ListItem
      key={edge.node.id}
      className={setClassName(index)}
      onClick={() => categoryClickHandler(index)}
    >
      {edge.node.name}
    </ListItem>
  ));

  return <List>{items}</List>;
};

const Categories = props => {
  const variables = {};
  return useQuery(query, markup, variables, props);
};

// Which category to display at the Homepage

const getFirstCategory = data => {
  try {
    console.log("return ok");
    return data.categories.edges[0].node.categoryId;
  } catch (error) {
    console.log("return null");
    return null;
  }
};

const getCategoryForHome = () => {
  return useQuery(query, getFirstCategory);
};

export default Categories;
export { getCategoryForHome };
