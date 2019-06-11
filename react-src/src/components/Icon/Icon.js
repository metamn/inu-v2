import React from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  cursor: pointer;

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
    css`
      display: none;
    `};
`;

const Icon = props => {
  const defaults = { size: 1.5, ...props };
  const { children, className, size } = defaults;

  return (
    <Container size={size} className={className}>
      {children}
    </Container>
  );
};

export default Icon;
