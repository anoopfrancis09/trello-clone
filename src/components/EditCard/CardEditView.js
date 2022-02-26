import EditCardTitle from "./EditCardViewTitleSection";
import EditCardMainContent from "./EditCardMainContent";
import { useState } from "react";

function CardEditView(props) {
  const { cardData, onClose, updateCardData } = props;
  const [bannerColor, setBannerColor] = useState(cardData.color);

  const updateBannerColor = (color) => {
    setBannerColor(color);
  };

  return (
    <div className="edit-container">
      <div className="card-editView box">
        <div className="editView-content box">
          <EditCardTitle bannerColor={bannerColor} onClose={onClose} />
          <EditCardMainContent
            updateCardData={updateCardData}
            updateBannerColor={updateBannerColor}
            cardData={cardData}
          />
        </div>
      </div>
    </div>
  );
}

export default CardEditView;
