import React from "react";
import styled, { css } from "styled-components";

const Button = styled.button`
  margin-right: var(--lem);
  cursor: pointer;

  ${props =>
    props.className === "active" &&
    css`
      color: black;
      background: #000;
    `}
`;

const Bullet = props => {
  const { className, onClick } = props;
  return <Button className={className} onClick={onClick} />;
};

export default Bullet;
