import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import Posts from "./Posts";
import description from "./Posts.md";

storiesOf("Components/Posts", module).add("Overview", () => <Posts />, {
  info: {
    inline: true,
    text: description
  }
});
