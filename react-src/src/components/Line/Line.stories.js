import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import Line from "./Line";
import description from "./Line.md";

storiesOf("Components/Line", module).add("Overview", () => <Line />, {
  info: {
    inline: true,
    text: description
  }
});
