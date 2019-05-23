import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import Title from "./Title";
import description from "./Title.md";

storiesOf("Components/Title", module).add("Overview", () => <Title />, {
  info: {
    inline: true,
    text: description
  }
});
