import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div``;

const Icon = props => {
  const { children } = props;
  return <Container>{children}</Container>;
};

export default Icon;
