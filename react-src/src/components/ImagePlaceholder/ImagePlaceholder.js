import React from "react";
import styled, { css } from "styled-components";

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

const ImagePlaceholder = props => {
  const { width, height } = props;
  const backgroundColor = "black";

  return (
    <Placeholder
      width={width}
      height={height}
      backgroundColor={backgroundColor}
    />
  );
};

export default ImagePlaceholder;
