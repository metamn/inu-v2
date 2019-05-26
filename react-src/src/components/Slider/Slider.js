import React, { useState, useEffect } from "react";
import styled from "styled-components";
import gql from "graphql-tag";
import { useQuery } from "../../hooks";
import { useKeyPress } from "../../hooks";

import Spacing from "../Spacing";
import List from "../List";
import Slide from "../Slide";
import Post from "../Post";
import Bullets from "../Bullets";

const Container = styled.section`
  ${Spacing({ property: "margin-top" })}
`;

// Original idea:
// - https://nolanlawson.com/2019/02/10/building-a-modern-carousel-with-css-scroll-snap-smooth-scrolling-and-pinch-zoom/
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

  &::-webkit-scrollbar {
    display: none;
  }
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

const markup = data => {
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

  return { slides, refs, numberOfSlides };
};

const Slider = props => {
  const variables = { first: 10 };
  const { slides, refs, numberOfSlides } = useQuery(query, markup, variables);

  // We have a single state
  const [activeBullet, setActiveBullet] = useState(0);

  // Without useEffect we can't have access to `activeBullet`
  // - see: https://reactjs.org/docs/hooks-effect.html
  useEffect(() => {
    console.log("activeBullet:" + activeBullet);
    if (refs) {
      refs[activeBullet].current.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });

  // We have keyboard navigation
  //
  // - Hooks must be first amongst the other declarations ...
  // - This put after hooks would cause an error
  const ArrowRightPress = useKeyPress("ArrowRight");

  const bulletClickHandler = index => {
    console.log("click index:" + index);
    setActiveBullet(index);
  };

  const arrowRightHandler = () => {
    console.log("activeBullet:" + activeBullet);
    setActiveBullet(activeBullet + 1);
  };

  return (
    <Container>
      <Slides>{slides}</Slides>
      <Bullets
        numberOfSlides={numberOfSlides}
        activeBullet={activeBullet}
        bulletClickHandler={bulletClickHandler}
      />
      {ArrowRightPress && arrowRightHandler()}
    </Container>
  );
};

export default Slider;
