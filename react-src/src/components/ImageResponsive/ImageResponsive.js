import React, { useContext } from "react";
import ProgressiveImage from "react-progressive-image";
import styled from "styled-components";

import { ThemeContext } from "../../themes/default.js";
import ImagePlaceholder from "../ImagePlaceholder";

const Image = styled.img`
  max-width: 80vw;
  max-height: 70vh;
  width: auto;
  height: auto;
  cursor: pointer;
`;

const ImageResponsive = props => {
  const { title, src, imageClickHandler, index, numberOfSlides, node } = props;
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
            width="80vw"
            height="70vh"
            backgroundColor={backgroundColor}
          />
        ) : (
          <Image
            src={src}
            srcSet={srcSetData.srcSet}
            alt={title}
            onClick={() => imageClickHandler(index, numberOfSlides)}
          />
        );
      }}
    </ProgressiveImage>
  );
};

export default ImageResponsive;
