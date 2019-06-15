// Sets a class name either to `active` or `inactive`
// ... or to anything specified by props

const setClassName = (
  target,
  index,
  activeClassName = "active",
  inactiveClassName = "inactive"
) => {
  return index === target ? activeClassName : inactiveClassName;
};

export default setClassName;
