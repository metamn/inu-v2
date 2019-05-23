import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import List from "./List";
import description from "./List.md";

storiesOf("Components/List", module).add("Overview", () => <List />, {
  info: {
    inline: true,
    text: description
  }
});
