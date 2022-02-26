import { useRef, useState } from "react";
import ColorContainer from "./ColorContainer";
import Input from "./Input";

function EditCardMainContent(props) {
  const { cardData, updateCardData, updateBannerColor } = props;
  const [desEditStarted, setDescEditStarted] = useState(false);
  const [color, setColor] = useState(cardData.color);
  const [titleEditStarted, setTitleEditStarted] = useState(false);
  const titleRef = useRef(null);
  const descRef = useRef(null);

  const onEditStart = (field) => {
    switch (field) {
      case "title":
        setTitleEditStarted(true);
        break;
      case "description":
        setDescEditStarted(true);
        break;
      default:
        return;
    }
  };

  const onSave = () => {
    let newCardData = cardData;
    newCardData.title = titleRef.current.innerText;
    newCardData.color = color;
    newCardData.description = descRef.current.innerText;
    updateCardData(newCardData);
  };

  const onColorChange = (selectedColor) => {
    setColor(selectedColor);
    updateBannerColor(selectedColor);
  };

  const onEditStop = (field) => {
    switch (field) {
      case "title":
        setTitleEditStarted(false);
        break;
      case "description":
        setDescEditStarted(false);
        break;
      default:
        return;
    }
  };

  return (
    <div className="card-maincontent">
      <div className="inputContents">
        <div
          className={
            titleEditStarted ? "titleContent editable" : "titleContent"
          }
          onBlur={(e) => onEditStop("title")}
          onFocus={(e) => onEditStart("title")}
          ref={titleRef}
          contentEditable="true"
        >
          {cardData.title}
        </div>
        <div
          type="text"
          className={desEditStarted ? "description editable" : "description"}
          ref={descRef}
          contentEditable="true"
          onBlur={(e) => onEditStop("description")}
          onFocus={(e) => onEditStart("description")}
        >
          {cardData.description ? cardData.description : "Add description..."}
        </div>
        <ColorContainer onColorChange={onColorChange} cardData={cardData} />
      </div>
      <div className="saveButton-container">
        <button onClick={onSave} className="saveButton">
          Save
        </button>
      </div>
    </div>
  );
}

export default EditCardMainContent;
