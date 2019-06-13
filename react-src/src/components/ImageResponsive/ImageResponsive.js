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
  const { sizes } = node.featuredImage.mediaDetails;

  return (
    <ProgressiveImage src={src} placeholder="" delay={150}>
      {(src, loading) => {
        return loading ? (
          //ImagePlaceholder
          placeholder2
        ) : (
          <Image
            src={src}
            alt={title}
            onClick={() => imageClickHandler(index, numberOfSlides)}
            style={{ opacity: loading ? 0.5 : 1 }}
          />
        );
      }}
    </ProgressiveImage>
  );
};

export default ImageResponsive;
