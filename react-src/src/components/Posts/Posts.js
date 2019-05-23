import React from "react";
import gql from "graphql-tag";
import useQuery from "./../../hooks";

const query = gql`
  query posts($first: Int) {
    posts(first: $first) {
      edges {
        node {
          id
          title
          date
        }
      }
    }
  }
`;

const markup = data => {
  const items = data.posts.edges.map(edge => (
    <li key={edge.node.id}>{edge.node.title}</li>
  ));
  return <ul>{items}</ul>;
};

const Posts = () => {
  const variables = { first: 3 };
  return useQuery(query, markup, variables);
};

export default Posts;
