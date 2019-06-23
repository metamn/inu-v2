import React, { useContext } from "react";
import ProgressiveImage from "react-progressive-image";
import styled, { css } from "styled-components";

import { ThemeContext } from "../../themes/default.js";
import Placeholder from "../Placeholder";

const Image = styled.img`
  width: auto;
  height: auto;

  // A custom cursor blinks when clicking the image
  // So we use the normal cursor ...
  cursor: pointer;

  // Do not show the alt title while loading the image
  ${props =>
    props.color &&
    css`
      color: ${props.color};
    `};

  ${props =>
    props.width &&
    css`
      max-width: ${props.width};
    `};

  ${props =>
    props.height &&
    css`
      max-height: ${props.height};
    `};
`;

const ImageResponsive = props => {
  const {
    title,
    src,
    imageClickHandler,
    index,
    numberOfSlides,
    node,
    width,
    height
  } = props;
  const { featuredImage } = node;
  const { mediaDetails } = featuredImage;
  const { sizes } = mediaDetails;

  let srcSet = sizes.map(item => `${item.sourceUrl} ${item.width}w`);
  srcSet.push(`${featuredImage.sourceUrl} ${mediaDetails.width}w`);

  const themeContext = useContext(ThemeContext);
  const { theme } = themeContext;
  const backgroundColor = theme.colors.background;

  return (
    <ProgressiveImage src={src} placeholder="" srcSetData={{ srcSet: srcSet }}>
      {(src, loading, srcSetData) => {
        return loading ? (
          <Placeholder type="box" width={width} height={height} />
        ) : (
          <Image
            src={src}
            srcSet={srcSetData.srcSet}
            alt={title}
            width={width}
            height={height}
            color={backgroundColor}
            onClick={() => imageClickHandler(index, numberOfSlides)}
          />
        );
      }}
    </ProgressiveImage>
  );
};

export default ImageResponsive;
