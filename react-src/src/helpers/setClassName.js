// Sets a class name either to `active` or `inactive`
// ... or to anything specified by props

import PropTypes from "prop-types";

const Props = {
  activeClassName: PropTypes.string,
  inactiveClassName: PropTypes.string
};

const DefaultProps = {
  activeClassName: "active",
  inactiveClassName: "inactive"
};

const setClassName = props => {
  const { target, index, activeClassName, inactiveClassName } = props;
  return index === target ? activeClassName : inactiveClassName;
};

setClassName.propTypes = Props;
setClassName.defaultProps = DefaultProps;

export default setClassName;
