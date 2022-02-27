function Input(props) {
  const { value, onChange, placeholder } = props;

  return (
    <input
      onChange={onChange}
      className="common-input"
      defaultValue={value}
      placeholder={placeholder}
    ></input>
  );
}

export default Input;
