import React, { useEffect, useCallback } from "react";
import styled, { css } from "styled-components";
import gql from "graphql-tag";
import { useQuery, useEventListener } from "../../hooks";

import List from "../List";
import Slide from "../Slide";
import Post from "../Post";

const Container = styled.main`
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

// The query
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
  const { refs, imageClickHandler } = queryProps;

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
  const {
    width,
    height,
    category,
    activeSlide,
    setActiveSlide,
    slideshowActive
  } = props;

  // Refs to each slide
  let refs = [];

  // Scroll the active slide into the view
  // scrollTo:
  // - ???
  //
  // scrollIntoView:
  // - when `behavior` == 'smooth' things get tricky:
  //  - indifferent how you set `block` or `inline` the slider sometimes is flicking sometimes is not
  //  - on Chrome works differently than in Firefox
  //  - it is better to use 'auto' instead of 'smooth'
  //  - and do the animation in the image / placeholder
  //  - ... in other words scrollIntoView is not yet ready for prime time
  useEffect(
    () => {
      if (refs && refs[activeSlide] && refs[activeSlide].current) {
        refs[activeSlide].current.className += " active";
        refs[activeSlide].current.scrollIntoView({
          behavior: "auto",
          block: "start",
          inline: "nearest"
        });
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
  const imageClickHandler = useCallback((index, numberOfSlides) => {
    // No clicks on `Random`
    if (category === -1) return;

    if (index + 1 < numberOfSlides) {
      setActiveSlide(index + 1);
    } else {
      setActiveSlide(0);
    }
  });

  // The bullet click handler
  // Bullets are not displayed now ...
  /*
  const bulletClickHandler = index => {
    setActiveSlide(index);
  };
  */

  // The data hook
  const variables =
    category === -1 ? { first: 10 } : { first: 100, category: category };

  const queryProps = {
    refs: refs,
    imageClickHandler: imageClickHandler,
    width: width,
    height: height,
    category: category
  };

  const { slides, numberOfSlides } = useQuery(
    query,
    markup,
    variables,
    queryProps
  );

  // The slideshow
  useEffect(
    () => {
      let interval = null;

      if (slideshowActive) {
        interval = setInterval(() => {
          const slides = Array.from(Array(numberOfSlides).keys());
          const slidesWithoutTheCurrentSlide = slides.filter(
            i => i !== activeSlide
          );
          const random =
            slidesWithoutTheCurrentSlide[
              Math.floor(Math.random() * slidesWithoutTheCurrentSlide.length)
            ];
          setActiveSlide(random);
        }, 2500);
      } else {
        clearInterval(interval);
      }

      return () => clearInterval(interval);
    },
    [activeSlide, numberOfSlides, setActiveSlide, slideshowActive]
  );

  return (
    <Container width={width}>
      <Slides>{slides}</Slides>
    </Container>
  );
};

export default Slider;
