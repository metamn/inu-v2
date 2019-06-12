// @flow

import React from "react";

import ImageThumb from "../ImageThumb";
import ImageResponsive from "../ImageResponsive";

type Props = {
  src: string,
  title?: string,
  imageType?: string,
  node: {}
};

const Image = (props: Props) => {
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

export default Image;
