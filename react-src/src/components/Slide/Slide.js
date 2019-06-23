import React from "react";
import styled from "styled-components";

const Container = styled.li`
  width: 100%;

  article {
    opacity: 0;
    transform: translateX(100vw);
    // On Random this transition effect is not visible since there are many images and the scrollintoview process takes more than 500ms, even more then 1500ms
    transition: all 500ms;
  }

  &.active {
    article {
      opacity: 1;
      transform: translateX(0px);
    }
  }

  @supports (scroll-snap-align: start) {
    /* modern scroll snap points */
    scroll-snap-align: center;
  }

  @supports not (scroll-snap-align: start) {
    /* old scroll snap points spec */
    scroll-snap-coordinate: 0 0;
  }
`;

const Slide = React.forwardRef((props, ref) => {
  const { children } = props;

  return <Container ref={ref}>{children}</Container>;
});

export default Slide;
