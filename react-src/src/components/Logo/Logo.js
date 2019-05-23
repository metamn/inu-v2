import React from "react";
import styled from "styled-components";
import Title from "../Title";
import Description from "../Description";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Logo = () => {
  return (
    <Container>
      <Title />
      <Description />
    </Container>
  );
};

export default Logo;
