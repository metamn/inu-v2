import React from "react";

const Image = props => {
  const { title, src } = props.props;
  return <img src={src} alt={title} />;
};

export default Image;
