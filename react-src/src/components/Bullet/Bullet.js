import React from "react";
import styled, { css } from "styled-components";

import theme from "../../themes/default.js";

const Container = styled.li``;

const Button = styled.button`
  border: none;
  margin: 0;
  padding: 0;
  background-color: transparent;

  width: calc(var(--lem) * 2);
  height: calc(var(--lem) / 3);
  border-bottom: calc(var(--lem) / 3) solid ${props => props.theme.colors.gray};

  margin-right: var(--lem);
  cursor: pointer;

  ${props =>
    props.className === "active" &&
    css`
      border-color: ${props => props.theme.colors.text};
    `};
`;

const Bullet = props => {
  const { className, bulletClickHandler, index } = props;
  return (
    <Container>
      <Button
        theme={theme}
        className={className}
        onClick={() => bulletClickHandler(index)}
      >
        &nbsp;
      </Button>
    </Container>
  );
};

export default Bullet;
