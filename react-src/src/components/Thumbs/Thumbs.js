import React from "react";
import gql from "graphql-tag";
import styled from "styled-components";

import { useQuery } from "../../hooks";

import Post from "../Post";
import Image from "../Image";

const Container = styled.section`
  width: 100%;
  margin-top: calc(var(--lem) * 2);

  display: flex;
  flex-wrap: wrap;
`;

const query = gql`
  query posts($first: Int, $category: Int) {
    posts(first: $first, where: { categoryId: $category }) {
      edges {
        node {
          id
          title
          featuredImage {
            id
            sourceUrl
            ...ImageMediaDetails
          }
        }
      }
    }
  }
  ${Image.fragments.mediaDetails}
`;

const markup = (data, queryProps) => {
  const { postType } = queryProps;

  const postsWithImage = data.posts.edges.filter(
    edge => edge.node.featuredImage
  );

  const posts = postsWithImage.map((edge, index) => {
    return (
      <Post
        key={index}
        index={index}
        node={edge.node}
        postType={postType}
        {...queryProps}
      />
    );
  });

  return { posts };
};

const Thumbs = props => {
  // The image click handler
  const { setActiveSlide } = props;
  const imageClickHandler = index => {
    setActiveSlide(index);
  };

  // The query
  const { category } = props;
  const variables = { first: 1000, category: category };
  const queryProps = {
    postType: "thumb",
    imageClickHandler: imageClickHandler,
    ...props
  };
  const { posts } = useQuery(query, markup, variables, queryProps);

  return <Container>{posts}</Container>;
};

export default Thumbs;
