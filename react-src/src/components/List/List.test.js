import React from "react";

import styled from "styled-components";
import renderer from "react-test-renderer";
import "jest-styled-components";

import List from "./List";

describe("List container", function() {
  it("should not overflow", () => {
    const wrapper = renderer.create(<List />).toJSON();
    expect(wrapper).toHaveStyleRule("overflow", "hidden");
  });
});
