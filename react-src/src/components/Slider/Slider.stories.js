import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import Slider from "./Slider";
import description from "./Slider.md";

storiesOf("Components/Slider", module).add("Overview", () => <Slider />, {
  info: {
    inline: true,
    text: description
  }
});
