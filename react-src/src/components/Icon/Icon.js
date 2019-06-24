import React, { useContext } from "react";
import styled, { css } from "styled-components";

import { ThemeContext } from "../../themes/default.js";
import { CursorDefault } from "../Cursor";

const Container = styled.div`
  ${CursorDefault}

  ${props =>
    props.size &&
    css`
      width: calc(var(--lem) * ${props.size});
      height: calc(var(--lem) * ${props.size});

      svg {
        font-size: calc(var(--lem) * ${props.size});
      }
    `}

  ${props =>
    props.className === "active" &&
    css`
      display: flex;
    `};

  ${props =>
    props.className === "inactive" &&
    props.theme.colors.inactive &&
    css`
      color: ${props.theme.colors.inactive};
    `};

  ${props =>
    props.className === "hidden" &&
    css`
      display: none;
    `};
`;

const Icon = props => {
  const defaults = { size: 1.5, ...props };
  const { children, className, size } = defaults;

  const themeContext = useContext(ThemeContext);
  const { theme } = themeContext;

  return (
    <Container size={size} className={className} theme={theme}>
      {children}
    </Container>
  );
};

export default Icon;
