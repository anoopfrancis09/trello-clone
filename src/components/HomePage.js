import ColumnComponent from "./ColumnComponent";
import AddNewColumnComponent from "./AddNewColumnComponent";
import { updateColumnDataAfterDrag, getColumnAddedToData } from "../utils";
import { useState } from "react";
import { data } from "../mock_data/data";
// const data = require("../mock_data/data");

function HomePage() {
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

  return (
    <div className="home-container">
      <h1>Trello Board</h1>
      <div className="column-container">
        {columnData.columns.map((eachColumn) => {
          return (
            <ColumnComponent
              updateColumnsWithCards={updateColumnsWithCards}
              columnData={eachColumn}
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
