import React from "react";
import styled from "styled-components";
import gql from "graphql-tag";
import useQuery from "./../../hooks";

const query = gql`
  query siteDescription {
    generalSettings {
      description
    }
  }
`;

const H2 = styled.h2`
  font-size: 100%;
  font-weight: normal;
  color: #666;
`;

const markup = data => {
  const description = data.generalSettings.description;
  return <H2>{description}</H2>;
};

const Description = () => {
  return useQuery(query, markup);
};

export default Description;
