import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import Image from "./Image";
import description from "./Image.md";

storiesOf("Components/Image", module).add("Overview", () => <Image />, {
  info: {
    inline: true,
    text: description
  }
});
