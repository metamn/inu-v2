import React from "react";

import styled from "styled-components";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Title from "./Title";

describe("Title container", function() {
  it("should not overflow", () => {
    const wrapper = renderer.create(<Title />).toJSON();
    expect(wrapper).toHaveStyleRule("overflow", "hidden");
  });
});
