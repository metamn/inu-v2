import React from "react";
import ProgressiveImage from "react-progressive-image";
import styled, { css } from "styled-components";

const placeholder = props => {
  const Placeholder = styled.div`
    background-color: #000;
    width: 500px;
    height: 300px;

    ${props =>
      props.backgroundColor &&
      css`
        background-color: backgroundColor;
      `};

    ${props =>
      props.width &&
      css`
        width: width;
      `};

    ${props =>
      props.height &&
      css`
        height: height;
      `};
  `;

  return <Placeholder {...props} />;
};

const Img = styled.img`
  max-width: 80vw;
  max-height: 70vh;
  width: auto;
  height: auto;
  cursor: pointer;
`;

const ImgThumb = styled.img`
  max-width: 10em;
  width: 100%;
  height: auto;
`;

const Image = props => {
  const {
    title,
    src,
    imageClickHandler,
    index,
    numberOfSlides,
    imageType
  } = props;

  const Display = () => {
    switch (imageType) {
      case "thumb":
        return (
          <ProgressiveImage src={src} placeholder="">
            {(src, loading) => {
              return loading ? (
                placeholder({ width: "10em", height: "auto" })
              ) : (
                <ImgThumb src={src} alt={title} />
              );
            }}
          </ProgressiveImage>
        );
        break;
      default:
        return (
          <ProgressiveImage src={src} placeholder="">
            {(src, loading) => {
              return loading ? (
                placeholder
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
    }
  };

  return <Display />;
};

export default Image;
