import React from "react";
import styled, { css } from "styled-components";
import ProgressiveImage from "react-progressive-image";

import ImagePlaceholder from "../ImagePlaceholder";
import Media from "../Media";

const ImageActive = css`
  border: 1px solid;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  cursor: pointer;

  padding: calc(var(--lem) / 1);
  border: 1px solid transparent;
  margin-right: 3px;

  ${props =>
    props.maxWidth &&
    css`
      ${Media.mobile`
  	  	max-width: ${props.maxWidth};
  	  `};
      ${Media.tablet`
		  max-width: calc(${props.maxWidth} + var(--lem) * 2 + 2px);
		  `};
    `}

  &:hover {
    ${ImageActive}
  }

  ${props =>
    props.isActive &&
    css`
      ${ImageActive}
      cursor: default;
    `}
`;

const ImageThumb = props => {
  const { title, src, node, thumbClickHandler, index, activeSlide } = props;
  const { sizes } = node.featuredImage.mediaDetails;
  const thumb = sizes.find(item => item.name === "thumbnail");

  const thumbSrc = thumb.sourceUrl ? thumb.sourceUrl : src;
  const thumbWidth = thumb.width ? thumb.width + "px" : "calc(var(--lem) * 15)";
  const thumbHeight = thumb.height ? thumb.height + "px" : "auto";
  const thumbisActive = index === activeSlide;

  return (
    <ProgressiveImage src={thumbSrc} placeholder="">
      {(thumbSrc, loading) => {
        return loading ? (
          <ImagePlaceholder width={thumbWidth} height={thumbHeight} />
        ) : (
          <Image
            src={thumbSrc}
            alt={title}
            maxWidth={thumbWidth}
            onClick={() => thumbClickHandler(index)}
            isActive={thumbisActive}
          />
        );
      }}
    </ProgressiveImage>
  );
};

export default ImageThumb;
