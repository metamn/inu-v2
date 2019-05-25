import React from "react";
import styled, { css } from "styled-components";

import Bullet from "../Bullet";
import Repeat from "../Repeat";

const Bullets = props => {
  const { numberOfSlides, bulletClickHandler } = props;

  return (
    <Repeat numberOfTimes={numberOfSlides} startAt={0}>
      {i => <Bullet key={i} onClick={() => bulletClickHandler(i)} />}
    </Repeat>
  );
};

export default Bullets;
