import React from "react";
import styled, { css } from "styled-components";

import List from "../List";
import Spacing from "../Spacing";

const Container = styled.section`
  ${Spacing({ property: "margin-top" })}
`;

const Slides = styled(List)`
  width: 80vw;

  ${Spacing({ property: "margin-top" })}

  display: flex;
  align-items: center;

  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type-x: mandatory;

  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

const Bullets = styled(List)``;

const Slider = props => {
  const { slides, bullets } = props;

  return (
    <Container>
      <Slides>{slides}</Slides>
      <Bullets>{bullets}</Bullets>
    </Container>
  );
};

export default Slider;
