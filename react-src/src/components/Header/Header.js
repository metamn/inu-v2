import React from "react";
import styled from "styled-components";
import { FiList, FiSun } from "react-icons/fi";

import Logo from "../Logo";
import Line from "../Line";
import Categories from "../Categories";
import Icon from "../Icon";
import Media from "../Media";

const Container = styled.header`
  display: flex;
  align-items: flex-start;

  ${Media.mobile`flex-direction: row;`}
  ${Media.tablet`flex-direction: row`}
`;

const HeaderIcon = styled(Icon)`
  margin-left: var(--lem);

  ${Media.tablet`margin-top: calc(var(--lem) * 3);`}
`;

const Header = props => {
  const { thumbIconClickHandler, sunIconClickHandler } = props;

  return (
    <Container>
      <Logo />
      <Line />
      <Categories {...props} />
      <HeaderIcon size={1.25}>
        <FiList onClick={() => thumbIconClickHandler()} />
      </HeaderIcon>
      <HeaderIcon size={1.25}>
        <FiSun onClick={() => sunIconClickHandler()} />
      </HeaderIcon>
    </Container>
  );
};

export default Header;
