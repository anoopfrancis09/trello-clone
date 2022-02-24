function AddNewColumnComponent(props) {
  const { onAddNewColumn } = props;

  return (
    <div className="add-column-main box">
      <p onClick={onAddNewColumn}>Add another list</p>
    </div>
  );
}

export default AddNewColumnComponent;
