import React from "react";
import ProgressiveImage from "react-progressive-image";
import styled from "styled-components";

const placeholder = (
  <div style={{ backgroundColor: "#000", height: 300, width: 500 }} />
);

const Img = styled.img`
  max-width: 80vw;
  max-height: 70vh;
  width: auto;
  height: auto;
  cursor: pointer;
`;

const Image = props => {
  const { title, src } = props;
  const { imageClickHandler, index, numberOfSlides } = props.props;
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
};

export default Image;
