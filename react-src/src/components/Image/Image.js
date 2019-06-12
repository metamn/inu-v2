import React from "react";
import ProgressiveImage from "react-progressive-image";
import styled, { css } from "styled-components";

const placeholder = props => {
  const Placeholder = styled.div`
    background-color: white;
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

const ImgThumb = styled.img`
  max-width: calc(var(--lem) * 15);
  width: 100%;
  height: auto;
`;

const Image = props => {
  const { imageType } = props;

  const Thumb = props => {
    const { title, src } = props;
    return (
      <ProgressiveImage src={src} placeholder="">
        {(src, loading) => {
          return loading ? (
            placeholder({ width: "calc(var(--lem) * 15)", height: "auto" })
          ) : (
            <ImgThumb src={src} alt={title} />
          );
        }}
      </ProgressiveImage>
    );
  };

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
        return Thumb(props);
      default:
        return Default(props);
    }
  };

  return <Display />;
};

export default Image;
