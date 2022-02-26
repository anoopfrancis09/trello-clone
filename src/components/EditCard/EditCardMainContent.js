import { useRef, useState } from "react";
import Input from "./Input";

function EditCardMainContent(props) {
  const { cardData, updateCardData } = props;
  const [desEditStarted, setDescEditStarted] = useState(false);
  const [titleEditStarted, setTitleEditStarted] = useState(false);
  const titleRef = useRef(null);
  const descRef = useRef(null);

  const onChange = (e) => {
    console.log("value", titleRef.current.innerText);
  };

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
    newCardData.description = descRef.current.innerText;
    console.log("Saved...", newCardData);
    updateCardData(newCardData);
  };

  const onEditStop = (field) => {
    switch (field) {
      case "title":
        setTitleEditStarted(false);
        console.log(titleRef.current.innerText);
        break;
      case "description":
        setDescEditStarted(false);
        console.log(descRef.current.innerText);
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
          "No description added"
        </div>
        <Input onChange={onChange} value={cardData.title}></Input>
        <Input value={cardData.title}></Input>
        <Input value={cardData.title}></Input>
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
