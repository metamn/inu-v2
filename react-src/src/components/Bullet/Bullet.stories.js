import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import Bullet from "./Bullet";
import description from "./Bullet.md";

storiesOf("Components/Bullet", module).add("Overview", () => <Bullet />, {
  info: {
    inline: true,
    text: description
  }
});
