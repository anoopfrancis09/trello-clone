import { useRef, useState } from "react";
import AddNew from "./AddNewItem";

function AddNewColumnComponent(props) {
  const { onAddNewColumn } = props;
  const [shouldShow, setShouldShow] = useState(false);

  const onClickHandler = (e) => {
    setShouldShow(true);
  };

  const onSave = (title) => {
    onAddNewColumn(title);
    setShouldShow(false);
  };

  const onCancel = () => {
    setShouldShow(false);
  };

  return (
    <div>
      <div
        onClick={onClickHandler}
        id="addNewButton"
        className="add-column-main box"
      >
        <i className="fa fa-plus-square"></i>
        <p className="add-column-label">Add another list</p>
      </div>
      {shouldShow && <AddNew onSave={onSave} onCancel={onCancel} />}
    </div>
  );
}

export default AddNewColumnComponent;
