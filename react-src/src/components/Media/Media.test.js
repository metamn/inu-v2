import React from "react";

import styled from "styled-components";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Media from "./Media";

describe("Media container", function() {
  it("should not overflow", () => {
    const wrapper = renderer.create(<Media />).toJSON();
    expect(wrapper).toHaveStyleRule("overflow", "hidden");
  });
});
