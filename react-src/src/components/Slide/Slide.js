import React from "react";
import styled from "styled-components";

const Container = styled.li`
  width: 100%;

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
