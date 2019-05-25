import React from "react";
import styled, { css } from "styled-components";

const Button = styled.button`
  margin-right: var(--lem);
`;

const Bullet = props => {
  const { onClick } = props;
  return <Button onClick={onClick} />;
};

export default Bullet;
