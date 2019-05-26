import React, { useState } from "react";
import styled, { css } from "styled-components";
import gql from "graphql-tag";
import useQuery from "./../../hooks";

import Spacing from "../Spacing";
import Slide from "../Slide";
import Post from "../Post";
import List from "../List";
import Bullets from "../Bullets";

const Container = styled.section`
  ${Spacing({ property: "margin-top" })}
`;

const Slides = styled(List)`
  width: 80vw;
  margin-top: var(--lem);

  display: flex;
  align-items: center;

  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type-x: mandatory;

  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

// try next: https://stackoverflow.com/questions/43441856/reactjs-how-to-scroll-to-an-element
// https://github.com/fisshy/react-scroll

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

  const bulletClickHandler = index => {
    console.log("clicked:" + index);
  };

  return (
    <Container>
      <Slides>{slides}</Slides>
      <Bullets
        numberOfSlides={numberOfSlides}
        bulletClickHandler={bulletClickHandler}
      />
    </Container>
  );
};

const Slider = props => {
  const variables = { first: 10 };
  return useQuery(query, markup, variables);
};

export default Slider;
