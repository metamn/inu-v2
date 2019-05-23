import React from "react";

const Post = node => {
  console.log("node:" + JSON.stringify(node));
  return (
    <article>
      <h3>{node.node.title}</h3>
      <img src={node.node.featuredImage.sourceUrl} />
    </article>
  );
};

export default Post;
