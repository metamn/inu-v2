import React from "react";

import styled from "styled-components";
import renderer from "react-test-renderer";
import "jest-styled-components";

import MenuToggleIcons from "./MenuToggleIcons";

describe("MenuToggleIcons container", function() {
  it("should not overflow", () => {
    const wrapper = renderer.create(<MenuToggleIcons />).toJSON();
    expect(wrapper).toHaveStyleRule("overflow", "hidden");
  });
});
