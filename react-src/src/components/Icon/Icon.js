import React, { useContext } from "react";
import styled, { css } from "styled-components";

import { ThemeContext } from "../../themes/default.js";
import { CursorPointer } from "../Cursor";

const Container = styled.div`
  ${CursorPointer}

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
    props.className.includes("active") &&
    css`
      display: flex;
    `};

  ${props =>
    props.className.includes("inactive") &&
    props.theme.colors.inactive &&
    css`
      color: ${props.theme.colors.inactive};
      cursor: default;
    `};

  ${props =>
    props.className.includes("hidden") &&
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
