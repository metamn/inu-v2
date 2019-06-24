import React from "react";
import styled, { css } from "styled-components";

import Icon from "../Icon";
import { setClassName } from "../../helpers";

const Container = styled.div``;

const IconToggle = props => {
  const { setClassNameCondition, icon1, icon2 } = props;

  return (
    <Container>
      <Icon
        className={setClassName(
          true,
          setClassNameCondition,
          "active",
          "hidden"
        )}
      >
        {icon1}
      </Icon>
      <Icon
        className={setClassName(
          false,
          setClassNameCondition,
          "active",
          "hidden"
        )}
      >
        {icon2}
      </Icon>
    </Container>
  );
};

export default IconToggle;
