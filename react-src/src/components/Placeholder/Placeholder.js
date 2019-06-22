import React, { useContext } from "react";
import styled, { css } from "styled-components";

import { ThemeContext } from "../../themes/default.js";

const Text = styled.div`
  width: 100%;
  height: var(--lem);
  background: lightgray;

  ${props =>
    props.theme.colors.placeholder &&
    css`
      background: ${props.theme.colors.placeholder};
    `};
`;

const Placeholder = props => {
  const { type } = props;
  const themeContext = useContext(ThemeContext);
  const { theme } = themeContext;

  switch (type) {
    case "text":
      return <Text theme={theme} />;
    default:
      return <div>Loading...</div>;
  }
};

export default Placeholder;
