import React from "react";
import styled from "styled-components";

import Bullet from "../Bullet";
import Repeat from "../Repeat";
import List from "../List";
import { setClassName } from "../../helpers";

const Container = styled(List)`
  display: flex;
  margin-top: var(--lem);
`;

const Bullets = props => {
  const { numberOfSlides, activeBullet, bulletClickHandler } = props;

  return (
    <Container>
      <Repeat numberOfTimes={numberOfSlides} startAt={0}>
        {i => (
          <Bullet
            className={setClassName({ target: activeBullet, index: i })}
            key={i}
            index={i}
            bulletClickHandler={bulletClickHandler}
          />
        )}
      </Repeat>
    </Container>
  );
};

export default Bullets;
