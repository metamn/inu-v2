import React from "react";
import gql from "graphql-tag";
import { useQuery } from "../../hooks";

import Post from "../Post";

const query = gql`
  query posts($first: Int, $category: Int) {
    posts(first: $first, where: { categoryId: $category }) {
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

const markup = data => {
  const postsWithImage = data.posts.edges.filter(
    edge => edge.node.featuredImage
  );

  const posts = postsWithImage.map((edge, index) => {
    return <Post node={edge.node} />;
  });

  return { posts };
};

const Thumbs = props => {
  const { category } = props;

  const variables = { first: 1000, category: category };
  const { posts } = useQuery(query, markup, variables);

  return <>{posts}</>;
};

export default Thumbs;
