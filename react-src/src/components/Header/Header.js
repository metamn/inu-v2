import React from "react";
import styled from "styled-components";
import { FiList, FiSun } from "react-icons/fi";

import Logo from "../Logo";
import Line from "../Line";
import Menu from "../Menu";
import MenuIcons from "../MenuIcons";
import Icon from "../Icon";
import Media from "../Media";

const Container = styled.header`
  display: flex;
  align-items: flex-start;

  ${Media.mobile`flex-direction: row;`}
  ${Media.tablet`flex-direction: row`}
`;

const HeaderIcons = styled.div`
  display: flex;
`;

const HeaderIcon = styled(Icon)`
  margin-left: var(--lem);

  ${Media.tablet`margin-top: calc(var(--lem) * 3);`}
`;

const Header = props => {
  const {
    thumbIconClickHandler,
    sunIconClickHandler,
    logoClickHandler
  } = props;

  return (
    <Container>
      <Logo logoClickHandler={logoClickHandler} />
      <Line />
      <Menu {...props} />
      <MenuIcons {...props} />
      <HeaderIcons>
        <HeaderIcon size={1.25}>
          <FiList onClick={() => thumbIconClickHandler()} />
        </HeaderIcon>
        <HeaderIcon size={1.25}>
          <FiSun onClick={() => sunIconClickHandler()} />
        </HeaderIcon>
      </HeaderIcons>
    </Container>
  );
};

export default Header;
