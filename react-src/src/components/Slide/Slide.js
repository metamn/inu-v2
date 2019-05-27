import React from "react";
import styled from "styled-components";

const Container = styled.li`
  scroll-snap-align: center;
  margin-right: 80vw;
`;

const Slide = React.forwardRef((props, ref) => {
  const { children } = props;

  return <Container ref={ref}>{children}</Container>;
});

export default Slide;
