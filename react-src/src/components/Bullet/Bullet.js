import React from "react";
import styled, { css } from "styled-components";

const Button = styled.button`
  margin-right: var(--lem);
`;

const scroll = () => {
  return node.scrollTo({
    [horizontal ? "left" : "top"]: topOrLeft,
    behavior: "smooth"
  });
};

const Bullet = props => {
  return <Button onclick={scroll} />;
};

export default Bullet;
