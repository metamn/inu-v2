import React from "react";
import styled from "styled-components";
import Image from "../Image";

const Article = styled.article`
  width: 80vw;
`;

const Title = styled.h3`
  display: none;
`;

const Post = props => {
  const { node } = props;
  const title = node.title;
  const src = node.featuredImage.sourceUrl;

  return (
    <Article>
      <Title>{title}</Title>
      <Image title={title} src={src} props={props} />
    </Article>
  );
};

export default Post;
