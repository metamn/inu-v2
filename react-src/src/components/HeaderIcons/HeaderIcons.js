import React from "react";
import styled from "styled-components";
import { FiList, FiSun } from "react-icons/fi";

import Icon from "../Icon";
import Media from "../Media";

const Container = styled.div`
  display: flex;
`;

const HeaderIcon = styled(Icon)`
  margin-left: var(--lem);

  ${Media.tablet`margin-top: calc(var(--lem) * 3);`}
`;

const HeaderIcons = props => {
  const { thumbIconClickHandler, sunIconClickHandler } = props;

  return (
    <Container>
      <HeaderIcon size={1.25}>
        <FiList onClick={() => thumbIconClickHandler()} />
      </HeaderIcon>
      <HeaderIcon size={1.25}>
        <FiSun onClick={() => sunIconClickHandler()} />
      </HeaderIcon>
    </Container>
  );
};

export default HeaderIcons;
