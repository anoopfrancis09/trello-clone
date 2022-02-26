import { useState } from "react";
import CardEditView from "../EditCard/CardEditView";

function CardComponent(props) {
  const { cardData, columnId, updateCardData } = props;
  const [shouldShow, setShouldShow] = useState(false);
  const dragStart = (event) => {
    const data = { cardId: parseInt(event.target.id), columnId };
    event.dataTransfer.setData("sourceData", JSON.stringify(data));
  };

  const onCardClick = (e) => {
    setShouldShow(true);
  };

  const onCloseEditView = (e) => {
    setShouldShow(false);
  };

  const updateCard = (cardData) => {
    updateCardData(cardData, columnId);
    setShouldShow(false);
  };
  return (
    <div>
      <div
        id={cardData.id}
        draggable={true}
        onClick={(event) => {
          onCardClick(columnId, cardData);
        }}
        onDragStart={dragStart}
        className="card-main box"
        style={{
          "--bannerColor": cardData.color ? cardData.color : "#6498ff",
        }}
      >
        <p>{cardData.title}</p>
      </div>
      {shouldShow && (
        <div>
          <CardEditView
            updateCardData={updateCard}
            cardData={cardData}
            onClose={onCloseEditView}
          />
        </div>
      )}
    </div>
  );
}

export default CardComponent;
