import ColumnComponent from "./Column/ColumnComponent";
import AddNewColumnComponent from "./AddNewColumnComponent";
import {
  updateColumnDataAfterDrag,
  getColumnAddedToData,
  updateCardData,
  addNewCard,
  deleteColumn,
} from "../utils";
import { useEffect, useState } from "react";
import { data } from "../mock_data/data";

function HomePage(props) {
  const storedData = window.localStorage.getItem("boardData");
  console.log("storedData", storedData);
  const [columnData, setColumnData] = useState(
    storedData ? JSON.parse(storedData) : data
  );

  useEffect(() => {
    window.localStorage.setItem("boardData", JSON.stringify(columnData));
  }, [columnData]);

  const updateColumnsWithCards = (srcColumnId, destColumnId, draggedCardId) => {
    const updatedData = updateColumnDataAfterDrag(
      srcColumnId,
      destColumnId,
      draggedCardId,
      columnData
    );
    setColumnData(updatedData);
  };

  const addNewColumn = (title) => {
    setColumnData(getColumnAddedToData(columnData, title));
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

  const onDeleteColumn = (columnId) => {
    const newData = deleteColumn(columnId, columnData);
    setColumnData(newData);
    console.log("Deleting column...", newData);
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
              onDeleteColumn={onDeleteColumn}
            />
          );
        })}
        <AddNewColumnComponent onAddNewColumn={addNewColumn} />
      </div>
    </div>
  );
}

export default HomePage;
