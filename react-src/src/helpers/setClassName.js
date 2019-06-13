// Sets a class name either to `active` or `inactive`
const setClassName = props => {
  const { target, index } = props;
  return index === target ? "active" : "inactive";
};

export default setClassName;
