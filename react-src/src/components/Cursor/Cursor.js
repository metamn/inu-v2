import { css } from "styled-components";

export const CursorDefault = css`
  cursor: url("/react-wp/wp-content/themes/inu-v2/brutalist_line_SVGicon_cursor2.png"),
    default;
`;

export const CursorPointer = css`
  &:hover {
    cursor: url("/react-wp/wp-content/themes/inu-v2/brutalist_line_SVGicon_cursor1.png"),
      pointer;
  }
`;
