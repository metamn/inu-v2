import React from "react";
import styled from "styled-components";
import gql from "graphql-tag";
import useQuery from "./../../hooks";

const query = gql`
  query siteTitle {
    generalSettings {
      title
    }
  }
`;

const H1 = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 1.5em;
  padding-top: 1.45833em;
  font-weight: normal;
`;

const markup = data => {
  const title = data.generalSettings.title;
  return <H1>{title}</H1>;
};

const Title = () => {
  return useQuery(query, markup);
};

export default Title;
