const Checkbox = ({ label, className, ...rest }) => {
  return (
    <label className={className}>
      <input type="checkbox" {...rest} />
      <span> {label} </span>
    </label>
  );
};

export default Checkbox;
