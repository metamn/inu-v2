import styled from "styled-components";

const Line = styled.div`
  width: calc(var(--lem) * 8);
  height: var(--lem);
  border-bottom: 1px solid;
  transform: rotate(-65deg) translateX(calc(var(--lem) * -2));
`;

export default Line;
