import React from "react";
import styled, { css } from "styled-components";
import ProgressiveImage from "react-progressive-image";

import ImagePlaceholder from "../ImagePlaceholder";

const Image = styled.img`
  width: 100%;
  height: auto;
  cursor: pointer;

  ${props =>
    props.maxWidth &&
    css`
      max-width: ${props.maxWidth};
    `}
`;

const ImageThumb = props => {
  const { title, src, node, thumbClickHandler, index } = props;
  const { sizes } = node.featuredImage.mediaDetails;
  const thumb = sizes.find(item => item.name === "thumbnail");

  const thumbSrc = thumb.sourceUrl ? thumb.sourceUrl : src;
  const thumbWidth = thumb.width ? thumb.width + "px" : "calc(var(--lem) * 15)";
  const thumbHeight = thumb.height ? thumb.height + "px" : "auto";

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
          />
        );
      }}
    </ProgressiveImage>
  );
};

export default ImageThumb;
