function CardComponent(props) {
  const { cardData, columnId } = props;
  const dragStart = (event) => {
    const data = { cardId: parseInt(event.target.id), columnId };
    event.dataTransfer.setData("sourceData", JSON.stringify(data));
  };
  return (
    <div
      id={cardData.id}
      draggable={true}
      onDragStart={dragStart}
      className="card-main box"
    >
      <p>{cardData.title}</p>
    </div>
  );
}

export default CardComponent;
