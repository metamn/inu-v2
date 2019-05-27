import React from "react";
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
  const { node, width } = props;
  const title = node.title;
  const src = node.featuredImage.sourceUrl;

  return (
    <Article width={width}>
      <Title>{title}</Title>
      <Image title={title} src={src} props={props} />
    </Article>
  );
};

export default Post;
