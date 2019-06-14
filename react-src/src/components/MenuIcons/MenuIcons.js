import React from "react";
import styled from "styled-components";
import { FiMenu, FiX } from "react-icons/fi";

import Icon from "../Icon";
import Media from "../Media";

const Container = styled.div`
  ${Media.mobile`display: flex`}
  ${Media.tablet`display: none`}
`;

const MenuIcons = props => {
  return (
    <Container>
      <Icon>
        <FiMenu />
      </Icon>
      <Icon>
        <FiX />
      </Icon>
    </Container>
  );
};

export default MenuIcons;
