import { useState } from "react";

function AddNew(props) {
  const { onSave, onCancel, placeHolder } = props;
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
        placeholder={placeHolder}
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
