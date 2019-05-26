import { css } from "styled-components";

import Media from "../Media";

const Spacing = props => {
  const { property } = props;
  return css`
    ${Media.mobile`${property}: var(--lem);`}
    ${Media.tablet`${property}: calc(var(--lem) * 2);`}
	${Media.laptop`${property}: calc(var(--lem) * 3);`}
	${Media.desktop`${property}: calc(var(--lem) * 4);`}
  `;
};

export default Spacing;
