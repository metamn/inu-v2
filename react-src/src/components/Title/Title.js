import React from "react";
import styled from "styled-components";
import gql from "graphql-tag";
import { useQuery } from "./../../hooks";

const query = gql`
  query siteTitle {
    generalSettings {
      title
    }
  }
`;

const H1 = styled.h1`
  font-size: 1.5em;
  font-weight: normal;
  cursor: pointer;
`;

const markup = (data, queryProps) => {
  const title = data.generalSettings.title;
  const { logoClickHandler } = queryProps;

  return <H1 onClick={() => logoClickHandler()}>{title}</H1>;
};

const Title = props => {
  return useQuery(query, markup, {}, props);
};

export default Title;
