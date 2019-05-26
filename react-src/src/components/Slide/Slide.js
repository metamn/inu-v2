import React, { useRef } from "react";
import styled from "styled-components";

const Container = styled.li`
  scroll-snap-align: center;
`;

const Slide = props => {
  const ref = useRef();
  const { children } = props;

  return <Container ref={ref}>{children}</Container>;
};

export default Slide;
