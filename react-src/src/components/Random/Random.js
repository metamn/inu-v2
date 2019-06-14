import React from "react";
import styled, { css } from "styled-components";

import List from "../List";
import ListItem from "../ListItem";
import { setClassName } from "../../helpers";

const Container = styled.nav`
  margin-top: calc(var(--lem) * 2);
`;

const Random = props => {
  const { activeCategory, activeCategoryIcon, categoryClickHandler } = props;

  // Icon and menu statuses
  const hideInactive = setClassName({
    target: true,
    index: activeCategoryIcon
  });

  return (
    <Container>
      <List>
        <ListItem
          key="random"
          className={setClassName({
            target: activeCategory,
            index: -1
          })}
          hideInactive={hideInactive}
          onClick={() => categoryClickHandler(-1)}
        >
          Random
        </ListItem>
      </List>
    </Container>
  );
};

export default Random;
