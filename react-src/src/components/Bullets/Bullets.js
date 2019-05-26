import React from "react";

import Bullet from "../Bullet";
import Repeat from "../Repeat";

const Bullets = props => {
  const { numberOfSlides, activeBullet, bulletClickHandler } = props;

  const setClassName = index => {
    return index === activeBullet ? "active" : "inactive";
  };

  return (
    <Repeat numberOfTimes={numberOfSlides} startAt={1}>
      {i => (
        <Bullet
          className={setClassName(i)}
          key={i}
          onClick={() => bulletClickHandler(i)}
        />
      )}
    </Repeat>
  );
};

export default Bullets;
