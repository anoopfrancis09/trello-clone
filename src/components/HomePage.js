import ColumnComponent from "./ColumnComponent";
import AddNewColumnComponent from "./AddNewColumnComponent";
import {
  updateColumnDataAfterDrag,
  getColumnAddedToData,
  updateCardData,
  addNewCard,
} from "../utils";
import { useState } from "react";
import { data } from "../mock_data/data";

function HomePage(props) {
  const [columnData, setColumnData] = useState(data);

  const updateColumnsWithCards = (srcColumnId, destColumnId, draggedCardId) => {
    const updatedData = updateColumnDataAfterDrag(
      srcColumnId,
      destColumnId,
      draggedCardId,
      columnData
    );
    setColumnData(updatedData);
  };

  const addNewColumn = () => {
    setColumnData(getColumnAddedToData(columnData));
  };

  const onCardEdit = (cardData, columnID) => {
    const updatedData = updateCardData(cardData, columnID, columnData);
    setColumnData(updatedData);
  };

  const onAddCard = (title, columnId) => {
    const newData = addNewCard(title, columnId, columnData);

    console.log("new data", newData);
    setColumnData(newData);
  };

  return (
    <div className="home-container">
      <h1>Trello Board</h1>
      <div className="column-container">
        {columnData.columns.map((eachColumn) => {
          return (
            <ColumnComponent
              updateColumnsWithCards={updateColumnsWithCards}
              columnData={eachColumn}
              cardEditAction={onCardEdit}
              onAddCard={onAddCard}
              key={eachColumn.id}
            />
          );
        })}
        <AddNewColumnComponent onAddNewColumn={addNewColumn} />
      </div>
    </div>
  );
}

export default HomePage;
