import React from "react";
import ProgressiveImage from "react-progressive-image";
import styled from "styled-components";

import ImagePlaceholder from "../ImagePlaceholder";

const Image = styled.img`
  max-width: calc(var(--lem) * 15);
  width: 100%;
  height: auto;
`;

const ImageThumb = props => {
  const { title, src } = props;
  return (
    <ProgressiveImage src={src} placeholder="">
      {(src, loading) => {
        return loading ? (
          ImagePlaceholder({ width: "calc(var(--lem) * 15)", height: "auto" })
        ) : (
          <Image src={src} alt={title} />
        );
      }}
    </ProgressiveImage>
  );
};

export default ImageThumb;
