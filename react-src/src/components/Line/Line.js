import styled from "styled-components";
import Media from "../Media";

const Line = styled.div`
  width: calc(var(--lem) * 8);
  height: var(--lem);
  border-bottom: 1px solid;
  transform: rotate(-65deg) translateX(calc(var(--lem) * -2));

  ${Media.mobile`display: none`}
  ${Media.tablet`display: flex`}
`;

export default Line;
