import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FiList, FiSun } from "react-icons/fi";

import Spacing from "../Spacing";

import Logo from "../Logo";
import Line from "../Line";
import Categories from "../Categories";
import Icon from "../Icon";

const Container = styled.header``;

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
