import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import Bullets from "./Bullets";
import description from "./Bullets.md";

storiesOf("Components/Bullets", module).add("Overview", () => <Bullets />, {
  info: {
    inline: true,
    text: description
  }
});
