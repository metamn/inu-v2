import React from "react";
import ProgressiveImage from "react-progressive-image";
import styled, { css } from "styled-components";

import ImageThumb from "../ImageThumb";

// Without this the slider is not working ...
const placeholder2 = (
  <div style={{ backgroundColor: "white", width: "80vw", height: "70vh" }} />
);

const Img = styled.img`
  max-width: 80vw;
  max-height: 70vh;
  width: auto;
  height: auto;
  cursor: pointer;
`;

const Image = props => {
  const { imageType } = props;

  const Default = props => {
    const { title, src, imageClickHandler, index, numberOfSlides } = props;
    return (
      <ProgressiveImage src={src} placeholder="">
        {(src, loading) => {
          return loading ? (
            placeholder2
          ) : (
            <Img
              src={src}
              alt={title}
              onClick={() => imageClickHandler(index, numberOfSlides)}
            />
          );
        }}
      </ProgressiveImage>
    );
  };

  const Display = () => {
    switch (imageType) {
      case "thumb":
        return ImageThumb(props);
      default:
        return Default(props);
    }
  };

  return <Display />;
};

export default Image;
