import { useRef } from "react";

function AddNewColumnComponent(props) {
  const { onAddNewColumn } = props;

  return (
    <div id="addNewButton" className="add-column-main box">
      <p onClick={onAddNewColumn}>Add another list</p>
    </div>
  );
}

export default AddNewColumnComponent;
