function Input(props) {
  const { value, onChange } = props;

  return (
    <input
      onChange={onChange}
      className="common-input"
      defaultValue={value}
    ></input>
  );
}

export default Input;
