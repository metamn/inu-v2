import React from "react";
import styled from "styled-components";
import { FiSun } from "react-icons/fi";
import { MdApps } from "react-icons/md";

import Icon from "../Icon";
import Media from "../Media";

const Container = styled.div`
  display: flex;
`;

const HeaderIcon = styled(Icon)`
  ${Media.mobile`
	margin-right: var(--lem);
	margin-bottom: calc(var(--lem) * 2);
	`};
  ${Media.tablet`
	  margin-left: var(--lem);
	  margin-right: 0;
	  margin-bottom: 0;
	  `};
`;

const HeaderIcons = props => {
  const { thumbIconClickHandler, sunIconClickHandler } = props;

  return (
    <Container>
      <HeaderIcon size={1.25}>
        <MdApps onClick={() => thumbIconClickHandler()} />
      </HeaderIcon>
      <HeaderIcon size={1.25}>
        <FiSun onClick={() => sunIconClickHandler()} />
      </HeaderIcon>
    </Container>
  );
};

export default HeaderIcons;
