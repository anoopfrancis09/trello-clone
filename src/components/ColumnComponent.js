import { useRef, useState } from "react";
import CardComponent from "./CardComponent";
import ColumnTitle from "./ColumnTitle";

function ColumnComponent(props) {
  const { columnData, updateColumnsWithCards, cardEditAction, onAddCard } =
    props;
  const [isOver, setIsOver] = useState(false);
  const column = useRef(null);

  const onDrop = (event) => {
    setIsOver(false);
    const cardDataString = event.dataTransfer.getData("sourceData");

    const cardData = JSON.parse(cardDataString);

    updateColumnsWithCards(cardData.columnId, columnData.id, cardData.cardId);
  };

  const allowDrop = (event) => {
    setIsOver(true);
    event.preventDefault();
  };

  const onAddCardAddition = (title) => {
    onAddCard(title, columnData.id);
  };

  return (
    <div
      onDrop={onDrop}
      onDragOver={allowDrop}
      onDragLeave={(e) => setIsOver(false)}
    >
      <div
        ref={column}
        style={{
          "--c":
            isOver && column.current
              ? `${column.current.clientHeight + 150}px`
              : 0,
        }}
        className={isOver ? "column-main drag-over box" : "column-main box"}
      >
        <ColumnTitle onSaveCard={onAddCardAddition} title={columnData.title} />
        {columnData.cards.map((eachCard) => {
          return (
            <CardComponent
              updateCardData={cardEditAction}
              columnId={columnData.id}
              cardData={eachCard}
              key={eachCard.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ColumnComponent;
