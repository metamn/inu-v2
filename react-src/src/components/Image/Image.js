import React from "react";
import gql from "graphql-tag";

import ImageThumb from "../ImageThumb";
import ImageResponsive from "../ImageResponsive";

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

Image.fragments = {
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

export default Image;
