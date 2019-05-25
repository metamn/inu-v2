import React, { useState } from "react";
import styled, { css } from "styled-components";

import List from "../List";
import Spacing from "../Spacing";
import Bullets from "../Bullets";

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

const Slider = props => {
  const { slides, numberOfSlides } = props;

  const bulletClickHandler = index => {
    console.log("clicked:" + index);
  };

  return (
    <Container>
      <Slides>{slides}</Slides>
      <Bullets
        numberOfSlides={numberOfSlides}
        bulletClickHandler={bulletClickHandler}
      />
    </Container>
  );
};

export default Slider;
