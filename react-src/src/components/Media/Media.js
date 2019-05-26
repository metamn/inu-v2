// Inspiration: https://www.styled-components.com/docs/advanced/#media-templates
//
import { css } from "styled-components";

const Breakpoints = {
  mobile: 320,
  tablet: 768,
  laptop: 1280,
  desktop: 1440
};

const Media = Object.keys(Breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${Breakpoints[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

export default Media;
