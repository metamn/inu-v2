import { css } from "styled-components";

export const CursorDefault = css`
  cursor: url("/react-wp/wp-content/themes/inu-v2/brutalist_line_SVGicon_cursor2.png")
      31 0,
    default;
`;

export const CursorPointer = css`
  &:hover {
    cursor: url("/react-wp/wp-content/themes/inu-v2/arrow-right.png") 16 0,
      pointer;
  }
`;
