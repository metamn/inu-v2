import React, { useContext } from "react";
import styled, { css } from "styled-components";

import { ThemeContext } from "../../themes/default.js";

const Placeholder = styled.div`
  background-color: lightgray;
  width: 150px;
  height: 150px;

  ${props =>
    props.backgroundColor &&
    css`
      background-color: ${props.backgroundColor};
    `};

  ${props =>
    props.width &&
    css`
      width: ${props.width};
    `};

  ${props =>
    props.height &&
    css`
      height: ${props.height};
    `};
`;

const ImagePlaceholder = props => {
  const themeContext = useContext(ThemeContext);
  const { theme } = themeContext;
  const backgroundColor = theme.colors.placeholder;

  return <Placeholder {...props} backgroundColor={backgroundColor} />;
};

export default ImagePlaceholder;
