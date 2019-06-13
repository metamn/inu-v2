import React from "react";
import gql from "graphql-tag";

import ImageThumb from "../ImageThumb";
import ImageResponsive from "../ImageResponsive";

const fragment = {
  mediaDetails: gql`
    fragment ImageMediaDetails on Posts {
      mediaDetails {
        file
        height
        width
        sizes {
          file
          height
          mimeType
          name
          sourceUrl
          width
        }
      }
    }
  `
};

const Image = props => {
  const { imageType } = props;

  const Display = () => {
    switch (imageType) {
      case "thumb":
        return ImageThumb(props);
      case "responsive":
      default:
        return ImageResponsive(props);
    }
  };

  return <Display />;
};

Image.fragments = fragment;

export default Image;
