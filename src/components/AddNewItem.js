import { useRef, useState } from "react";
import Input from "./EditCard/Input";

function AddNew(props) {
  const { onSave, onCancel } = props;
  const [title, setTitle] = useState("");
  const onChange = (e) => {
    setTitle(e.target.value);
  };

  const onClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div onClick={onClick} className="add-card-container">
      <input
        onChange={onChange}
        className="addCard-input"
        placeholder="Enter title for card"
        value={title}
      ></input>
      <button
        onClick={(e) => {
          onSave(title);
          setTitle("");
        }}
        className="add-card-button save"
      >
        Save
      </button>
      <button onClick={onCancel} className="add-card-button cancel">
        Cancel
      </button>
    </div>
  );
}

export default AddNew;
