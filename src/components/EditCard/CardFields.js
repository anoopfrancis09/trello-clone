function CardFields(props) {
  const { cardData } = props;

  return (
    <div className="card-input-container">
      <input value={cardData.title}></input>
      <input value={cardData.title}></input>
      <input value={cardData.title}></input>
    </div>
  );
}

export default CardFields;
