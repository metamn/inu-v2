import React from "react";

import styled from "styled-components";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Posts from "./Posts";

describe("Posts container", function() {
  it("should not overflow", () => {
    const wrapper = renderer.create(<Posts />).toJSON();
    expect(wrapper).toHaveStyleRule("overflow", "hidden");
  });
});
