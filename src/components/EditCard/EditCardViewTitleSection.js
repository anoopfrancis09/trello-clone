function EditCardTitle(props) {
  const { onAddNewColumn, onClose } = props;

  return (
    <div className="card-editView-title">
      <div onClick={onClose} className="close-container">
        <i className="fa fa-close closeIcon"></i>
      </div>
    </div>
  );
}

export default EditCardTitle;
