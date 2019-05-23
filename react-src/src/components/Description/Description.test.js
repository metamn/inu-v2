import React from "react";

import styled from "styled-components";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Description from "./Description";

describe("Description container", function() {
  it("should not overflow", () => {
    const wrapper = renderer.create(<Description />).toJSON();
    expect(wrapper).toHaveStyleRule("overflow", "hidden");
  });
});
