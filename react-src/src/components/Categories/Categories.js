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

export default Categories;
