import React, { useContext } from "react";
import styled, { css } from "styled-components";
import ProgressiveImage from "react-progressive-image";

import { ThemeContext } from "../../themes/default.js";
import Placeholder from "../Placeholder";
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
    props.size &&
    css`
      ${Media.mobile`
  	  	width: ${props.size};
		height: ${props.size};
  	  `};
      ${Media.tablet`
		  width: calc(${props.size} + var(--lem) * 2 + 2px);
		  height: calc(${props.size} + var(--lem) * 2 + 2px)
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
  const thumbSize = thumb.width ? thumb.width + "px" : "calc(var(--lem) * 15)";
  const thumbisActive = index === activeSlide;

  const themeContext = useContext(ThemeContext);
  const { theme } = themeContext;

  return (
    <ProgressiveImage src={thumbSrc} placeholder="">
      {(thumbSrc, loading) => {
        return loading ? (
          <Placeholder
            type="image"
            width={thumbSize}
            height={thumbSize}
            color={theme.colors.background}
          />
        ) : (
          <Image
            src={thumbSrc}
            alt={title}
            size={thumbSize}
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
