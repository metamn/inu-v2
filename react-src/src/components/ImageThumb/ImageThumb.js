import React, { useContext } from "react";
import styled, { css } from "styled-components";
import ProgressiveImage from "react-progressive-image";

import { ThemeContext } from "../../themes/default.js";
import ImagePlaceholder from "../ImagePlaceholder";
import Media from "../Media";
import { CursorDefault } from "../Cursor";

const ImageActive = css`
  ${props =>
    props.theme.colors.text &&
    css`
      border: 1px solid ${props.theme.colors.text};
    `};
`;

const Image = styled.img`
  width: 100%;
  height: auto;

  ${CursorDefault}

  padding: calc(var(--lem) / 1);
  border: 1px solid transparent;
  margin-right: 3px;

  // Do not show the alt title while loading the image
  ${props =>
    props.theme.colors.background &&
    css`
      color: ${props.theme.colors.background};
    `};

  ${props =>
    props.maxWidth &&
    css`
      ${Media.mobile`
  	  	width: ${props.maxWidth};
		height: ${props.maxWidth};
  	  `};
      ${Media.tablet`
		  width: calc(${props.maxWidth} + var(--lem) * 2 + 2px);
		  height: calc(${props.maxWidth} + var(--lem) * 2 + 2px)
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

  const themeContext = useContext(ThemeContext);
  const { theme } = themeContext;

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
            theme={theme}
            onClick={() => thumbClickHandler(index)}
            isActive={thumbisActive}
          />
        );
      }}
    </ProgressiveImage>
  );
};

export default ImageThumb;
