import { useRef, useState } from "react";
import Input from "./EditCard/Input";

function AddNewCard(props) {
  const { onSaveCard, onCancel } = props;
  const [cardTitle, setCardTitle] = useState("");
  const onChange = (e) => {
    setCardTitle(e.target.value);
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
      ></input>
      <button
        onClick={(e) => onSaveCard(cardTitle)}
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

export default AddNewCard;
