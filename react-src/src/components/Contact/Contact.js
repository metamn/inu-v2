import React, { useContext } from "react";
import styled, { css } from "styled-components";
import gql from "graphql-tag";

import { ThemeContext } from "../../themes/default.js";
import { useQuery } from "./../../hooks";
import Spacing from "../Spacing";

const Container = styled.section`
  width: 100%;
  font-size: 1.33em;
  margin: calc(var(--lem) * 3) 0;
  ${Spacing({ property: "padding" })}

  ${props =>
    props.theme.colors &&
    css`
      background: ${props.theme.colors.text}
	  color: ${props.theme.colors.background}
    `};

  h1,
  h2,
  p {
    margin-bottom: calc(var(--lem) * 2);
  }

  a {
    padding: calc(var(--lem) / 2);
    display: inline-block;

    ${props =>
      props.theme.colors &&
      css`
	      background: ${props.theme.colors.background}
		  color: ${props.theme.colors.text}
	    `};
  }
`;

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

  return <Container dangerouslySetInnerHTML={{ __html: content }} {...props} />;
};

const Contact = props => {
  const themeContext = useContext(ThemeContext);
  const { theme } = themeContext;

  const variables = {
    first: 1,
    where: {
      title: "Contact"
    }
  };

  const newProps = { theme: theme, ...props };

  return useQuery(query, markup, variables, newProps);
};

export default Contact;
