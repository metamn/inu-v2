import React from "react";
import ProgressiveImage from "react-progressive-image";
import styled, { css } from "styled-components";

const ImagePlaceholder = props => {
  const Placeholder = styled.div`
    background-color: white;
    width: 500px;
    height: 300px;

    ${props =>
      props.backgroundColor &&
      css`
        background-color: backgroundColor;
      `};

    ${props =>
      props.width &&
      css`
        width: width;
      `};

    ${props =>
      props.height &&
      css`
        height: height;
      `};
  `;

  return <Placeholder {...props} />;
};

export default ImagePlaceholder;
