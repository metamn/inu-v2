import React from "react";

import styled from "styled-components";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Slider from "./Slider";

describe("Slider container", function() {
  it("should not overflow", () => {
    const wrapper = renderer.create(<Slider />).toJSON();
    expect(wrapper).toHaveStyleRule("overflow", "hidden");
  });
});
