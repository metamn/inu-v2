import React from "react";
import styled from "styled-components";
import gql from "graphql-tag";
import useQuery from "./../../hooks";

import Spacing from "../Spacing";
import Post from "../Post";
import List from "../List";

const query = gql`
  query posts($first: Int) {
    posts(first: $first) {
      edges {
        node {
          id
          title
          featuredImage {
            id
            sourceUrl
          }
        }
      }
    }
  }
`;

const List2 = styled(List)`
  width: 100%;

  ${Spacing({ property: "margin-top" })}

  display: flex;
  align-items: center;

  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type-x: mandatory;
`;

const ListItem = styled.li`
  scroll-snap-align: center;
`;

const markup = data => {
  const itemsWithImage = data.posts.edges.filter(
    edge => edge.node.featuredImage
  );

  const items = itemsWithImage.map(edge => (
    <ListItem key={edge.node.id}>
      <Post node={edge.node} />
    </ListItem>
  ));

  return <List2>{items}</List2>;
};

const Posts = () => {
  const variables = { first: 10 };
  return useQuery(query, markup, variables);
};

export default Posts;
