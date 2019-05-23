import React from "react";
import Image from "../Image";

const Post = node => {
  const props = {
    title: node.node.title,
    src: node.node.featuredImage.sourceUrl
  };
  const { title } = props;

  return (
    <article>
      <h3>{title}</h3>
      <Image props={props} />
    </article>
  );
};

export default Post;
