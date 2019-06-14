import React from "react";
import styled, { css } from "styled-components";

import List from "../List";
import ListItem from "../ListItem";
import { setClassName } from "../../helpers";

const Container = styled.nav``;

const ContactMenuItem = props => {
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
            index: -2
          })}
          hideInactive={hideInactive}
          onClick={() => categoryClickHandler(-2)}
        >
          Contact
        </ListItem>
      </List>
    </Container>
  );
};

export default ContactMenuItem;
