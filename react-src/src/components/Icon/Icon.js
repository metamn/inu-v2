import React from "react";
import styled, { css } from "styled-components";
import { stringify } from "flatted";

const Container = styled.div`
  cursor: pointer;

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
  const { children, className } = props;
  return <Container className={className}>{children}</Container>;
};

export default Icon;
