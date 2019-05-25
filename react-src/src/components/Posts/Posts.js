import React from "react";
import styled from "styled-components";
import gql from "graphql-tag";
import useQuery from "./../../hooks";

import Slider, { bulletClick } from "../Slider";
import Slide from "../Slide";
import Post from "../Post";

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

const markup = data => {
  const itemsWithImage = data.posts.edges.filter(
    edge => edge.node.featuredImage
  );

  const slides = itemsWithImage.map(edge => (
    <Slide key={edge.node.id}>
      <Post node={edge.node} />
    </Slide>
  ));

  const numberOfSlides = itemsWithImage.length;

  return <Slider slides={slides} numberOfSlides={numberOfSlides} />;
};

const Posts = () => {
  const variables = { first: 10 };
  return useQuery(query, markup, variables);
};

export default Posts;
