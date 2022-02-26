import ColumnComponent from "./ColumnComponent";
import AddNewColumnComponent from "./AddNewColumnComponent";
import {
  updateColumnDataAfterDrag,
  getColumnAddedToData,
  updateCardData,
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
    console.log("New card data", cardData, columnID);
    const updatedData = updateCardData(cardData, columnID, columnData);
    setColumnData(updatedData);
    console.log("updatedData", updatedData);
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
