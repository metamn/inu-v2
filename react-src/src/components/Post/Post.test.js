import React from "react";

import styled from "styled-components";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Post from "./Post";

describe("Post container", function() {
  it("should not overflow", () => {
    const wrapper = renderer.create(<Post />).toJSON();
    expect(wrapper).toHaveStyleRule("overflow", "hidden");
  });
});
