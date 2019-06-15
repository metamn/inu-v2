import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import MenuToggleIcons from "./MenuToggleIcons";
import description from "./MenuToggleIcons.md";

storiesOf("Components/MenuToggleIcons", module).add(
  "Overview",
  () => <MenuToggleIcons />,
  {
    info: {
      inline: true,
      text: description
    }
  }
);
