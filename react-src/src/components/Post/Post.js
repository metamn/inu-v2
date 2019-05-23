import React from "react";
import Image from "pimg";

const Post = node => {
  console.log("node:" + JSON.stringify(node));
  return (
    <article>
      <h3>{node.node.title}</h3>
      <Image fetchOnDemand src={node.node.featuredImage.sourceUrl} />
    </article>
  );
};

export default Post;
