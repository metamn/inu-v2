import React from "react";
import styled from "styled-components";
import Image from "../Image";

const Title = styled.h3`
  display: none;
`;

const Post = node => {
  const props = {
    title: node.node.title,
    src: node.node.featuredImage.sourceUrl
  };
  const { title } = props;

  return (
    <article>
      <Title>{title}</Title>
      <Image props={props} />
    </article>
  );
};

export default Post;
