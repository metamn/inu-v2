import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import Spacing from "./Spacing";
import description from "./Spacing.md";

storiesOf("Components/Spacing", module).add("Overview", () => <Spacing />, {
  info: {
    inline: true,
    text: description
  }
});
