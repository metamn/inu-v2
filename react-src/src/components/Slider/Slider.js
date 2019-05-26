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

  // We can't use our own `useQuery` hook since we have a state hook
  // And hooks can be used inside React components only
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

  // We need to know the ref of each slide
  // in order to scroll to it
  const refs = Array(numberOfSlides).fill(null);

  const slides = itemsWithImage.map((edge, index) => {
    const ref = React.createRef();
    refs[index] = ref;

    return (
      <Slide key={edge.node.id} ref={ref}>
        <Post node={edge.node} />
      </Slide>
    );
  });

  const bulletClickHandler = index => {
    setActiveBullet(index);
    refs[index - 1].current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
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
