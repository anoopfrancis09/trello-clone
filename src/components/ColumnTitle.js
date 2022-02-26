function ColumnTitle(props) {
  const { title, options } = props;
  return (
    <div className="column-title-container">
      <label className="column-title">{title}</label>
      <i className="fa fa-ellipsis-v menu"></i>
    </div>
  );
}

export default ColumnTitle;
