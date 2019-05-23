import React from "react";
import gql from "graphql-tag";
import useQuery from "./../../hooks";

const query = gql`
  query siteDescription {
    generalSettings {
      description
    }
  }
`;

const markup = data => {
  const description = data.generalSettings.description;
  return <h2>{description}</h2>;
};

const Description = () => {
  return useQuery(query, markup);
};

export default Description;
