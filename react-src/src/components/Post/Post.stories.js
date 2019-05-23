import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import Post from "./Post";
import description from "./Post.md";

storiesOf("Components/Post", module).add("Overview", () => <Post />, {
  info: {
    inline: true,
    text: description
  }
});
