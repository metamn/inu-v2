import React from "react";
import styled, { css } from "styled-components";

const Container = styled.li`
  scroll-snap-align: center;
`;

const Slide = props => {
  const { children } = props;
  return <Container>{children}</Container>;
};

export default Slide;
