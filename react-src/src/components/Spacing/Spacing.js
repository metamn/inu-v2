import React from "react";
import styled, { css } from "styled-components";

import Media from "../Media";

const Spacing = props => {
  return css`
    ${Media.mobile`padding: var(--lem);`}
    ${Media.tablet`padding: calc(var(--lem) * 2);`}
	${Media.laptop`padding: calc(var(--lem) * 3);`}
	${Media.desktop`padding: calc(var(--lem) * 4);`}
  `;
};

export default Spacing;
