import React from "react";
import styled from "styled-components";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import Categories from "../Categories";
import MenuItemCustom from "../MenuItemCustom";
import IconToggle from "../IconToggle";
import Media from "../Media";

const Container = styled.section`
  display: flex;
  flex-wrap: nowrap;

  ${Media.mobile`
	  margin-bottom: calc(var(--lem) * 2);
	  order: 2;
	  `};

  ${Media.tablet`
	  	margin-bottom: 0;
		order: 0;
	  	`};
`;

const MenuItems = styled.section`
  font-weight: bold;
`;

const IconToggleContainer = styled.div`
  ${Media.mobile`display: none`}
  ${Media.tablet`display: flex`}
`;

const Menu = props => {
  const { categoryIconClickHandler, activeCategoryIcon } = props;

  const icon1 = <FiChevronDown onClick={() => categoryIconClickHandler()} />;
  const icon2 = <FiChevronUp onClick={() => categoryIconClickHandler()} />;

  return (
    <Container>
      <MenuItems>
        <Categories {...props} />
        <MenuItemCustom index={-1} menuItemText="random" {...props} />
        <MenuItemCustom index={-2} menuItemText="contact" {...props} />
      </MenuItems>
      <IconToggleContainer>
        <IconToggle
          setClassNameCondition={activeCategoryIcon}
          icon1={icon1}
          icon2={icon2}
        />
      </IconToggleContainer>
    </Container>
  );
};

export default Menu;
