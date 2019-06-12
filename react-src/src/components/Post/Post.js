// @flow

import React from "react";
import styled, { css } from "styled-components";
import Image from "../Image";

type Props = {
  postType: string,
  width: string,
  node: {
    title: string,
    featuredImage: {
      sourceUrl: string
    }
  }
};

const ArticleThumb = css`
  ${props =>
    props.postType === "thumb" &&
    css`
      margin-right: var(--lem);
      margin-bottom: var(--lem);
    `}
`;

const Article = styled.article`
  ${props =>
    props.width &&
    css`
      width: ${props.width};
    `}

  ${ArticleThumb}
`;

const Title = styled.h3`
  display: none;
`;

const Post = (props: Props) => {
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
      <Image src={src} title={title} imageType={imageType} {...props} />
    </Article>
  );
};

export default Post;
