import React from "react";

import styled from "styled-components";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Bullet from "./Bullet";

describe("Bullet container", function() {
  it("should not overflow", () => {
    const wrapper = renderer.create(<Bullet />).toJSON();
    expect(wrapper).toHaveStyleRule("overflow", "hidden");
  });
});
