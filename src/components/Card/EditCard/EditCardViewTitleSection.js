function EditCardTitle(props) {
  const { onAddNewColumn, onClose, bannerColor } = props;

  return (
    <div
      className="card-editView-title"
      style={{
        "--banner": bannerColor,
      }}
    >
      <div onClick={onClose} className="close-container">
        <i className="fa fa-close closeIcon"></i>
      </div>
    </div>
  );
}

export default EditCardTitle;
