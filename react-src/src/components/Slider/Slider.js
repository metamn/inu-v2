import React, { useState, useEffect } from "react";
import styled from "styled-components";
import gql from "graphql-tag";
import { useQuery, useKeyPress } from "../../hooks";

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

const markup = (data, queryProps) => {
  const { refs, imageClickHandler } = queryProps;

  const postsWithImage = data.posts.edges.filter(
    edge => edge.node.featuredImage
  );

  const numberOfSlides = postsWithImage.length;

  const slides = postsWithImage.map((edge, index) => {
    const ref = React.createRef();
    refs[index] = ref;

    return (
      <Slide key={edge.node.id} ref={ref} onClick={imageClickHandler}>
        <Post node={edge.node} />
      </Slide>
    );
  });

  return { slides, numberOfSlides };
};

const Slider = props => {
  //
  // 1. Vars needed by all below
  //
  // We need to have a `ref` associated which each slide to be able to scroll to
  let refs = [];

  //
  // 2. Hooks
  //
  // State hooks are first.
  // All things below need to know abut `activeBullet`
  const [activeBullet, setActiveBullet] = useState(0);

  // Without `useEffect` we can't properly have access to `activeBullet`
  // Even more when state changes this handles the
  // Perhaps every state hook has and effect hook associated
  //
  // - `useEffect` is associated to state, so it should immediately follow in code
  // - Otherwise and error message will be shown
  // - See: https://reactjs.org/docs/hooks-effect.html
  useEffect(
    () => {
      console.log("activeBullet:" + activeBullet);

      if (refs && refs[activeBullet] && refs[activeBullet].current) {
        refs[activeBullet].current.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    },
    [activeBullet, refs]
  );

  //
  // 3. Data hooks
  //
  // The image needs to be clicked so it comes after the state hook
  //
  // The image click handler
  const imageClickHandler = index => {
    console.log("image click index:" + index);
    setActiveBullet(index);
  };

  // The data hook
  const variables = { first: 10 };
  const queryProps = { refs: refs, imageClickHandler: imageClickHandler };
  const { slides, numberOfSlides } = useQuery(
    query,
    markup,
    variables,
    queryProps
  );

  //
  // 4. Other hooks
  // - Hooks must be first amongst the other declarations ...
  // - This put after hooks would cause an error
  //
  // The keyboard navigation hook
  const ArrowRightPress = useKeyPress("ArrowRight");

  //
  // 5. Regular stuff
  //

  // The bullet click handler
  const bulletClickHandler = index => {
    console.log("bullet click index:" + index);
    setActiveBullet(index);
  };

  // The keypress handlers
  // TODO: Here we got an infinite loop
  const arrowRightHandler = () => {
    console.log("arrow right click index:" + activeBullet);
    //setActiveBullet(activeBullet + 1);
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
