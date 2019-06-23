import React, { useContext } from "react";
import ProgressiveImage from "react-progressive-image";
import styled, { css } from "styled-components";

import { ThemeContext } from "../../themes/default.js";
import ImagePlaceholder from "../ImagePlaceholder";
import { CursorPointer } from "../Cursor";

const Image = styled.img`
  width: auto;
  height: auto;

  ${CursorPointer}

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

  console.log(srcSet);

  const themeContext = useContext(ThemeContext);
  const { theme } = themeContext;
  const backgroundColor = theme.colors.background;

  return (
    <ProgressiveImage
      src={src}
      placeholder=""
      delay={150}
      srcSetData={{ srcSet: srcSet }}
    >
      {(src, loading, srcSetData) => {
        return loading ? (
          <ImagePlaceholder width={width} height={height} />
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
