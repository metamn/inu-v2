import React from "react";
import ProgressiveImage from "react-progressive-image";
import styled from "styled-components";

import ImagePlaceholder from "../ImagePlaceholder";

const Image = styled.img`
  max-width: 80vw;
  max-height: 70vh;
  width: auto;
  height: auto;
  cursor: pointer;
`;

// Without this the slider is not working ...
const placeholder2 = (
  <div style={{ backgroundColor: "black", width: "80vw", height: "70vh" }} />
);

const ImageResponsive = props => {
  const { title, src, imageClickHandler, index, numberOfSlides, node } = props;
  const { featuredImage } = node;
  const { mediaDetails } = featuredImage;
  const { sizes } = mediaDetails;

  let srcSet = sizes.map(item => `${item.sourceUrl} ${item.width}w`);
  srcSet.push(`${featuredImage.sourceUrl} ${mediaDetails.width}w`);

  console.log("srcSet:" + srcSet);

  return (
    <ProgressiveImage src={src} placeholder="" srcSetData={{ srcSet: srcSet }}>
      {(src, loading, srcSetData) => {
        return loading ? (
          //ImagePlaceholder
          placeholder2
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
