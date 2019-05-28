import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { FiList, FiSun } from "react-icons/fi";

import Spacing from "../Spacing";

import Logo from "../Logo";
import Line from "../Line";
import Categories from "../Categories";
import Icon from "../Icon";
import Media from "../Media";

const Container = styled.header`
  display: flex;
  align-items: flex-start;

  ${Media.mobile`flex-direction: column;`}
  ${Media.tablet`flex-direction: row`}
`;

const HeaderIcon = styled(Icon)`
  margin-left: var(--lem);

  ${Media.tablet`margin-top: calc(var(--lem) * 3);`}
`;

const Header = props => {
  return (
    <Container>
      <Logo />
      <Line />
      <Categories {...props} />
      <HeaderIcon size={1.25}>
        <FiList />
      </HeaderIcon>
      <HeaderIcon size={1.25}>
        <FiSun />
      </HeaderIcon>
    </Container>
  );
};

export default Header;
