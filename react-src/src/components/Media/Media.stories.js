import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import Media from "./Media";
import description from "./Media.md";

storiesOf("Components/Media", module).add("Overview", () => <Media />, {
  info: {
    inline: true,
    text: description
  }
});
