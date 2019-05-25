import React from "react";

import styled from "styled-components";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Bullets from "./Bullets";

describe("Bullets container", function() {
  it("should not overflow", () => {
    const wrapper = renderer.create(<Bullets />).toJSON();
    expect(wrapper).toHaveStyleRule("overflow", "hidden");
  });
});
