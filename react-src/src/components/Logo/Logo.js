import React from "react";
import styled from "styled-components";
import Title from "../Title";
import Description from "../Description";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Logo = props => {
  const { logoClickHandler } = props;

  return (
    <Container>
      <Title logoClickHandler={logoClickHandler} />
      <Description logoClickHandler={logoClickHandler} />
    </Container>
  );
};

export default Logo;
