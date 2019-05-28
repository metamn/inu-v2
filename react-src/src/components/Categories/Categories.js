import React, { useState } from "react";
import styled, { css } from "styled-components";
import gql from "graphql-tag";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import { useQuery } from "./../../hooks";
import { setClassName } from "../../helpers";
import List from "../List";

const Container = styled.nav`
  display: flex;
  align-items: center;
`;

const Icons = styled.div`
  margin-left: var(--lem);
`;

const Icon = styled.div`
  display: none;
  align-items: center;
  cursor: pointer;

  ${props =>
    props.className === "active" &&
    css`
      display: flex;
    `};
`;

const ListItem = styled.li`
  font-size: 1.333em;
  cursor: pointer;
  display: none;

  ${props =>
    props.className === "active" &&
    css`
      display: flex;
      cursor: default;
    `};
`;

const query = gql`
  query Categories($hideEmpty: Boolean) {
    categories(where: { hideEmpty: $hideEmpty }) {
      edges {
        node {
          id
          categoryId
          name
        }
      }
    }
  }
`;

const markup = (data, props) => {
  const {
    activeCategory,
    categoryClickHandler,
    chevronDownClicked,
    chevronDownVisible,
    chevronUpClicked,
    chevronUpVisible
  } = props;

  // Parse categories into a list
  const items = data.categories.edges.map(edge => (
    <ListItem
      key={edge.node.id}
      className={setClassName({
        target: activeCategory,
        index: edge.node.categoryId
      })}
      onClick={() => categoryClickHandler(edge.node.categoryId)}
    >
      {edge.node.name}
    </ListItem>
  ));

  // Make sure the first category is marked active at the first load
  if (activeCategory === 0) {
    categoryClickHandler(data.categories.edges[0].node.categoryId);
  }

  return (
    <Container>
      <List>{items}</List>
      <Icons>
        <Icon
          className={setClassName({ target: true, index: chevronDownVisible })}
        >
          <FaChevronDown onClick={() => chevronDownClicked()} />
        </Icon>
        <Icon
          className={setClassName({ target: true, index: chevronUpVisible })}
        >
          <FaChevronUp onClick={() => chevronUpClicked()} />
        </Icon>
      </Icons>
    </Container>
  );
};

const Categories = props => {
  const [chevronDownVisible, setChevronDownVisible] = useState(true);
  const [chevronUpVisible, setChevronUpVisible] = useState(false);

  const chevronDownClicked = () => {
    console.log("chevronDownClicked");
    setChevronDownVisible(!chevronDownVisible);
    setChevronUpVisible(!chevronUpVisible);
  };

  const chevronUpClicked = () => {
    console.log("chevronUpClicked");
    setChevronDownVisible(!chevronDownVisible);
    setChevronUpVisible(!chevronUpVisible);
  };

  const variables = { hideEmpty: true };
  const newProps = {
    chevronDownVisible: chevronDownVisible,
    chevronDownClicked: chevronDownClicked,
    chevronUpVisible: chevronUpVisible,
    chevronUpClicked: chevronUpClicked
  };
  return useQuery(query, markup, variables, { ...props, ...newProps });
};

export default Categories;
