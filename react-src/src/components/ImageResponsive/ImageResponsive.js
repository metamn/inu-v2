import React, { useContext } from "react";
import ProgressiveImage from "react-progressive-image";
import styled, { css } from "styled-components";

import { ThemeContext } from "../../themes/default.js";
import ImagePlaceholder from "../ImagePlaceholder";

const Image = styled.img`
  width: auto;
  height: auto;
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
          // The placeholder size has to be the same as the slider size.
          // Otherwise the slider won't work
          <ImagePlaceholder
            width={width}
            height={height}
            backgroundColor={backgroundColor}
          />
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
