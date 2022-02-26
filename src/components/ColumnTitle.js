import { useRef } from "react";
import AddNewCard from "./AddNewCard";

function ColumnTitle(props) {
  const { title, onSaveCard } = props;
  const popup = useRef(null);

  const onClick = () => {
    popup.current.classList.toggle("show");
  };

  const onCardCancel = () => {};

  const onAddCard = (title) => {
    onSaveCard(title);
    popup.current.classList.toggle("show");
  };

  return (
    <div className="column-title-container">
      <label className="column-title">{title}</label>

      <div onClick={onClick} className="popup">
        <i className="fa fa-ellipsis-v menu"></i>
        <div ref={popup} className="popuptext" id="myPopup">
          <AddNewCard onSaveCard={onAddCard} onCancel={onCardCancel} />
        </div>
      </div>
    </div>
  );
}

export default ColumnTitle;
