import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import Description from "./Description";
import description from "./Description.md";

storiesOf("Components/Description", module).add(
  "Overview",
  () => <Description />,
  {
    info: {
      inline: true,
      text: description
    }
  }
);
