import React from "react";

import ImageThumb from "../ImageThumb";
import ImageResponsive from "../ImageResponsive";

const Image = props => {
  const { imageType } = props;

  const Display = () => {
    switch (imageType) {
      case "thumb":
        return ImageThumb(props);
      default:
        return ImageResponsive(props);
    }
  };

  return <Display />;
};

export default Image;
