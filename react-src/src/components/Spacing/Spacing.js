import { css } from "styled-components";

import Media from "../Media";

const Spacing = props => {
  const { property } = props;
  return css`
    ${Media.mobile`${property}: var(--lem);`}
    ${Media.tablet`${property}: calc(var(--lem) * 2);`}
	${Media.laptop`${property}: calc(var(--lem) * 2) 10%;`}
	${Media.desktop`${property}: calc(var(--lem) * 2) 10%;`}
  `;
};

export default Spacing;
