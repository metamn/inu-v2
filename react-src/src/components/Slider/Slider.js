import React, { useEffect, useCallback } from "react";
import styled, { css } from "styled-components";
import gql from "graphql-tag";
import { useQuery, useEventListener } from "../../hooks";

import List from "../List";
import Slide from "../Slide";
import Post from "../Post";
import Image from "../Image";

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
  query postsForSlider($first: Int, $category: Int) {
    posts(first: $first, where: { categoryId: $category }) {
      edges {
        node {
          id
          title
          featuredImage {
            id
            sourceUrl
            mediaDetails {
              file
              height
              width
              sizes {
                file
                height
                mimeType
                name
                sourceUrl
                width
              }
            }
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
          {...queryProps}
        />
      </Slide>
    );
  });

  return { slides, numberOfSlides };
};

const Slider = props => {
  const { width, height, category, activeSlide, setActiveSlide } = props;

  // Refs to each slide
  let refs = [];

  // Scroll the active slide into the view
  useEffect(
    () => {
      if (refs && refs[activeSlide] && refs[activeSlide].current) {
        refs[activeSlide].current.scrollIntoView();
      }
    },
    [activeSlide, refs]
  );

  // Touch scroll event handler
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
      setActiveSlide(visibleRef);
    },
    [refs, setActiveSlide]
  );

  // The touch event listener hook
  useEventListener("touchend", touchScrollHandler);

  // The image click handler
  const imageClickHandler = (index, numberOfSlides) => {
    if (index + 1 < numberOfSlides) {
      setActiveSlide(index + 1);
    } else {
      setActiveSlide(0);
    }
  };

  // The bullet click handler
  const bulletClickHandler = index => {
    setActiveSlide(index);
  };

  // The data hook
  const variables =
    category === -1 ? { first: 1000 } : { first: 1000, category: category };
  const queryProps = {
    refs: refs,
    imageClickHandler: imageClickHandler,
    width: width,
    height: height
  };
  const { slides, numberOfSlides } = useQuery(
    query,
    markup,
    variables,
    queryProps
  );

  return (
    <Container width={width}>
      <Slides>{slides}</Slides>
    </Container>
  );
};

export default Slider;
