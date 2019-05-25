import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import Slide from "./Slide";
import description from "./Slide.md";

storiesOf("Components/Slide", module).add("Overview", () => <Slide />, {
  info: {
    inline: true,
    text: description
  }
});
