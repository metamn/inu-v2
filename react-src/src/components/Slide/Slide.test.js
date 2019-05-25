import React from "react";

import styled from "styled-components";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Slide from "./Slide";

describe("Slide container", function() {
  it("should not overflow", () => {
    const wrapper = renderer.create(<Slide />).toJSON();
    expect(wrapper).toHaveStyleRule("overflow", "hidden");
  });
});
