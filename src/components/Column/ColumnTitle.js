import { useRef } from "react";
import AddNew from "../AddNewItem";

function ColumnTitle(props) {
  const { title, onSaveCard, onDeleteColumn, showActionItems } = props;
  const popup = useRef(null);

  const onClick = () => {
    popup.current.classList.toggle("show");
  };

  const onCardCancel = () => {
    popup.current.classList.toggle("show");
  };

  const onAddCard = (title) => {
    onSaveCard(title);
    popup.current.classList.toggle("show");
  };

  return (
    <div className="column-title-container">
      <label className="column-title">{title}</label>

      {showActionItems && (
        <div className="icon-container">
          <div onClick={onClick} className="popup">
            <i className="fa fa-plus-square menu mrg5"></i>
            <div ref={popup} className="popuptext" id="myPopup">
              <AddNew
                placeHolder="Enter title for card"
                onSave={onAddCard}
                onCancel={onCardCancel}
              />
            </div>
          </div>
          {/* <div
            onClick={(e) => {
              if (window.confirm("Do you want to delete the column?")) {
                onDeleteColumn();
              }
            }}
          >
            <i className="fa fa-window-close menu mrg5"></i>
          </div> */}
        </div>
      )}
    </div>
  );
}

export default ColumnTitle;
