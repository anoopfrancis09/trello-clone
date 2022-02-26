import EditCardTitle from "./EditCardViewTitleSection";
import EditCardMainContent from "./EditCardMainContent";

function CardEditView(props) {
  const { cardData, onClose, updateCardData } = props;

  return (
    <div className="edit-container">
      <div className="card-editView box">
        <div className="editView-content box">
          <EditCardTitle onClose={onClose} />
          <EditCardMainContent
            updateCardData={updateCardData}
            cardData={cardData}
          />
        </div>
      </div>
    </div>
  );
}

export default CardEditView;
