const setClassName = props => {
  const { target, index } = props;
  return index === target ? "active" : "inactive";
};

export default setClassName;
