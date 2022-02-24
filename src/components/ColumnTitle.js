function ColumnTitle(props) {
  const { title, options } = props;
  return (
    <div className="column-title-container">
      <label className="column-title">{title}</label>
    </div>
  );
}

export default ColumnTitle;
