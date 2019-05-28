import React from "react";
import styled from "styled-components";
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
`;

const markup = data => {
  const items = data.categories.edges.map(edge => (
    <ListItem key={edge.node.id}>{edge.node.name}</ListItem>
  ));

  return <List>{items}</List>;
};

const Categories = () => {
  return useQuery(query, markup);
};

// Which category to display at the Homepage

const getFirstCategory = data => {
  try {
    return data.categories.edges[0].node.categoryId;
  } catch (error) {
    return null;
  }
};

const getCategoryForHome = () => {
  return useQuery(query, getFirstCategory);
};

export default Categories;
export { getCategoryForHome };
