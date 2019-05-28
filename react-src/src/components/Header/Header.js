import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { FiList, FiSun } from "react-icons/fi";

import Spacing from "../Spacing";

import Logo from "../Logo";
import Line from "../Line";
import Categories from "../Categories";
import Icon from "../Icon";
import Media from "../Media";

const ContainerVertical = css`
  flex-direction: column;
`;

const ContainerHorizontal = css`
  flex-direction: row;
`;

const Container = styled.header`
  display: flex;

  ${Media.mobile`${ContainerVertical}`}
  ${Media.tablet`${ContainerHorizontal}`}
`;

const Header = props => {
  return (
    <Container>
      <Logo />
      <Line />
      <Categories {...props} />
      <Icon>
        <FiList />
      </Icon>
      <Icon>
        <FiSun />
      </Icon>
    </Container>
  );
};

export default Header;
