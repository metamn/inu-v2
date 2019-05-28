import React, { useState, useEffect, useCallback } from "react";
import styled, { css } from "styled-components";
import gql from "graphql-tag";
import { useQuery, useEventListener } from "../../hooks";
import { stringify } from "flatted";

import Spacing from "../Spacing";
import List from "../List";
import Slide from "../Slide";
import Post from "../Post";
import Bullets from "../Bullets";

const Container = styled.section`
  margin-top: calc(var(--lem) * 2);

  ${props =>
    props.width &&
    css`
      width: ${props.width};
    `}
`;

// Original idea:
// - https://nolanlawson.com/2019/02/10/building-a-modern-carousel-with-css-scroll-snap-smooth-scrolling-and-pinch-zoom/
const Slides = styled(List)`
  width: 100%;
  margin-top: var(--lem);

  display: flex;
  align-items: center;

  overflow-x: auto;
  overflow-y: hidden;

  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @supports (scroll-snap-align: start) {
    /* modern scroll snap points */
    scroll-snap-type: x mandatory;
  }

  @supports not (scroll-snap-align: start) {
    /* old scroll snap points spec */
    scroll-snap-type: mandatory;
    scroll-snap-destination: 0% center;
    scroll-snap-points-x: repeat(100%);
  }
`;

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

const markup = (data, queryProps) => {
  const { refs, imageClickHandler, width } = queryProps;

  const postsWithImage = data.posts.edges.filter(
    edge => edge.node.featuredImage
  );

  const numberOfSlides = postsWithImage.length;

  const slides = postsWithImage.map((edge, index) => {
    const ref = React.createRef();
    refs[index] = ref;

    return (
      <Slide key={edge.node.id} ref={ref}>
        <Post
          node={edge.node}
          // Click handling **MUST** go down to the smallest component, ie <img/>
          index={index}
          imageClickHandler={imageClickHandler}
          numberOfSlides={numberOfSlides}
          width={width}
        />
      </Slide>
    );
  });

  return { slides, numberOfSlides };
};

const Slider = props => {
  const { width, category, activeBullet, setActiveBullet } = props;

  //
  // 1. Vars needed by all things below
  //
  // We need to have a `ref` associated which each slide to be able to scroll to
  let refs = [];

  //
  // 2. Hooks
  //
  // State hooks are first.
  // All things below need to know abut `activeBullet`
  //const [activeBullet, setActiveBullet] = useState(0);
  //
  // `activeBullet` state was lifted up to be reset when a new category is clicked
  // This was the only way to make it work

  // Without `useEffect` we can't properly have access to `activeBullet`
  // Even more when state changes this handles the
  // Perhaps every state hook has and effect hook associated
  //
  // - `useEffect` is associated to state, so it should immediately follow in code
  // - Otherwise and error message will be shown
  // - See: https://reactjs.org/docs/hooks-effect.html
  useEffect(
    () => {
      if (refs && refs[activeBullet] && refs[activeBullet].current) {
        refs[activeBullet].current.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    },
    [activeBullet, refs]
  );

  // Touch scroll event handler
  // Attached to an event listener hook
  const touchScrollHandler = useCallback(
    () => {
      const visibleRef = refs.findIndex(ref => {
        const left = ref.current.getBoundingClientRect().left;
        const right = ref.current.getBoundingClientRect().right;
        return (
          left >= -window.innerWidth / 2 &&
          left <= window.innerWidth &&
          right > 0 &&
          right <= window.innerWidth * 1.5
        );
      });
      setActiveBullet(visibleRef);
    },
    [refs, setActiveBullet]
  );

  // The event listener hook
  useEventListener("touchend", touchScrollHandler);

  //
  // 3. Data hooks
  //
  // The image needs to be clicked so it comes after the state hook and before the data hook
  //
  // The image click handler
  const imageClickHandler = (index, numberOfSlides) => {
    if (index + 1 < numberOfSlides) {
      setActiveBullet(index + 1);
    } else {
      setActiveBullet(0);
    }
  };

  // The data hook
  // - we can't return an array which later will be processed like Bullets
  // - the returned array is first empty then only later becomes populated
  // - therefore we return the processed info inside `slides`
  const variables = { first: 10, category: category };
  const queryProps = {
    refs: refs,
    imageClickHandler: imageClickHandler,
    width: width
  };
  const { slides, numberOfSlides } = useQuery(
    query,
    markup,
    variables,
    queryProps
  );

  //
  // 4. Other hooks
  //

  //
  // 5. Regular stuff
  //

  // The bullet click handler
  const bulletClickHandler = index => {
    setActiveBullet(index);
  };

  return (
    <Container width={width}>
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
