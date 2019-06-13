import React, { useContext } from "react";
import styled from "styled-components";
import gql from "graphql-tag";
import { useQuery } from "./../../hooks";

import { ThemeContext } from "../../themes/default.js";

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
  color: ${props => props.theme.colors.gray};
`;

const markup = (data, queryProps) => {
  const description = data.generalSettings.description;
  const { theme } = queryProps;

  return <H2 theme={theme}>{description}</H2>;
};

const Description = () => {
  const themeContext = useContext(ThemeContext);
  const { theme } = themeContext;
  const queryProps = { theme: theme };

  return useQuery(query, markup, {}, queryProps);
};

export default Description;
