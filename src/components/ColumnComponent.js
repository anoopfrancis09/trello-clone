import CardComponent from "./CardComponent";
import ColumnTitle from "./ColumnTitle";

function ColumnComponent(props) {
  const { columnData, updateColumnsWithCards } = props;

  const onDrop = (event) => {
    const cardDataString = event.dataTransfer.getData("sourceData");

    const cardData = JSON.parse(cardDataString);

    updateColumnsWithCards(cardData.columnId, columnData.id, cardData.cardId);
  };

  const allowDrop = (event) => {
    event.preventDefault();
  };
  return (
    <div onDrop={onDrop} onDragOver={allowDrop} className="column-main box">
      {/* <p>{columnData.title}</p> */}
      <ColumnTitle title={columnData.title} />
      {columnData.cards.map((eachCard) => {
        return (
          <CardComponent
            columnId={columnData.id}
            cardData={eachCard}
            key={eachCard.id}
          />
        );
      })}
    </div>
  );
}

export default ColumnComponent;
