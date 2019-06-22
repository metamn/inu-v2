import React, { useContext } from "react";
import styled, { css } from "styled-components";
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
  cursor: pointer;
  letter-spacing: 1px;

  ${props =>
    props.theme.colors.gray &&
    css`
      color: ${props.theme.colors.gray};
    `};
`;

const markup = (data, queryProps) => {
  const description = data.generalSettings.description;
  const { theme, logoClickHandler } = queryProps;

  return (
    <H2 theme={theme} onClick={() => logoClickHandler()}>
      {description}
    </H2>
  );
};

const Description = props => {
  const themeContext = useContext(ThemeContext);
  const { theme } = themeContext;
  const queryProps = { theme: theme, ...props };

  return useQuery(query, markup, {}, queryProps);
};

export default Description;
