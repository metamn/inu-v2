import React from "react";
import styled from "styled-components";
import gql from "graphql-tag";

import { useQuery } from "./../../hooks";

const Container = styled.section``;

// The query definition
const query = gql`
  query page($first: Int, $where: RootQueryToPageConnectionWhereArgs!) {
    pages(first: $first, where: $where) {
      edges {
        node {
          id
          title
          content
        }
      }
    }
  }
`;

// Putting together the markup to be rendered
const markup = (data, props) => {
  const content = data.pages.edges[0].node.content;

  return <Container dangerouslySetInnerHTML={{ __html: content }} />;
};

const Contact = props => {
  const variables = {
    first: 1,
    where: {
      title: "Contact"
    }
  };

  return useQuery(query, markup, variables, props);
};

export default Contact;
