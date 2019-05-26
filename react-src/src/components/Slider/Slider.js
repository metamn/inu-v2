import React, { useState } from "react";
import styled from "styled-components";
import gql from "graphql-tag";
import { useQuery as useQueryApollo } from "react-apollo-hooks";

import Spacing from "../Spacing";
import List from "../List";
import Slide from "../Slide";
import Post from "../Post";
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

const Slider = props => {
  // We have a single state
  const [activeBullet, setActiveBullet] = useState(1);

  const { data, error, loading } = useQueryApollo(query, {
    variables: { first: 10 }
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error! {error.message}</div>;
  }

  const itemsWithImage = data.posts.edges.filter(
    edge => edge.node.featuredImage
  );

  const numberOfSlides = itemsWithImage.length;

  const slides = itemsWithImage.map((edge, index) => (
    <Slide key={edge.node.id}>
      <Post node={edge.node} />
    </Slide>
  ));

  const bulletClickHandler = index => {
    console.log("clicked:" + index);
    setActiveBullet(index);
    //window.scrollTo(0, refs[index].current.offsetTop);
  };

  return (
    <Container>
      <Slides>{slides}</Slides>
      <Bullets
        numberOfSlides={numberOfSlides}
        activeBullet={activeBullet}
        bulletClickHandler={bulletClickHandler}
      />
    </Container>
  );
};

export default Slider;
