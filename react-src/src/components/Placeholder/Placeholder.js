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

const BoxDimensions = css`
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

const BoxColors = css`
  ${props =>
    props.theme.colors.placeholder &&
    css`
      background-color: ${props.theme.colors.placeholder};
    `};

  ${props =>
    props.color &&
    css`
      background-color: ${props.color};
    `};
`;

const Box = styled.div`
  ${BoxDimensions}
  ${BoxColors}
`;

// For images this seems to be better ...
const Image = styled.img`
  ${BoxDimensions}
  ${BoxColors}
`;

const Blank = styled.div``;

const Placeholder = props => {
  const { type } = props;

  const themeContext = useContext(ThemeContext);
  const { theme } = themeContext;

  switch (type) {
    case "text":
      return <Text theme={theme} />;
    case "box":
      return <Box theme={theme} {...props} />;
    case "image":
      return <Image theme={theme} {...props} />;
    case "blank":
      return <Blank />;
    default:
      return <div>Loading...</div>;
  }
};

export default Placeholder;
