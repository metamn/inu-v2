import React from "react";
import gql from "graphql-tag";
import styled, { css } from "styled-components";

import Image from "../Image";

const Article = styled.article`
  ${props =>
    props.width &&
    css`
      width: ${props.width};
    `}
`;

const Title = styled.h3`
  display: none;
`;

const Post = props => {
  const { node, width, postType } = props;

  const title = node.title;
  const src = node.featuredImage.sourceUrl;

  let imageType = "";
  switch (postType) {
    case "thumb":
      imageType = "thumb";
      break;
    default:
      imageType = "responsive";
  }

  return (
    <Article width={width} postType={postType}>
      <Title>{title}</Title>
      <Image title={title} src={src} imageType={imageType} {...props} />
    </Article>
  );
};

export default Post;
