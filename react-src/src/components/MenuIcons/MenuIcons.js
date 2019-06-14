import React from "react";
import styled from "styled-components";
import { FiMenu, FiX } from "react-icons/fi";

import Icon from "../Icon";

const Container = styled.div``;

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
