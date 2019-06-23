import React, { useContext } from "react";
import styled, { css } from "styled-components";

import { ThemeContext } from "../../themes/default.js";

const Text = styled.div`
  width: 100%;
  height: var(--lem);
  background: lightgray;

  ${props =>
    props.theme.colors.placeholder &&
    css`
      background: ${props.theme.colors.placeholder};
    `};
`;

const Box = styled.div`
  ${props =>
    props.backgroundColor &&
    css`
      background-color: ${props.backgroundColor};
    `};

  ${props =>
    props.width &&
    css`
      width: ${props.width};
      min-width: ${props.width};
    `};

  ${props =>
    props.height &&
    css`
      height: ${props.height};
      min-height: ${props.height};
    `};
`;

const Placeholder = props => {
  const { type } = props;

  const themeContext = useContext(ThemeContext);
  const { theme } = themeContext;

  switch (type) {
    case "text":
      return <Text theme={theme} />;
    case "box":
      return <Box theme={theme} {...props} />;
    default:
      return <div>Loading...</div>;
  }
};

export default Placeholder;
