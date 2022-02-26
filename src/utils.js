const _ = require("lodash");

export const updateColumnDataAfterDrag = (
  srcColumnId,
  destColumnId,
  draggedCardId,
  data
) => {
  console.log(srcColumnId, destColumnId, draggedCardId, data.columns);
  let newSourceColumn = data.columns.filter(
    (item) => item.id === srcColumnId
  )[0];

  let newDestColumn = data.columns.filter(
    (item) => item.id === destColumnId
  )[0];

  const draggedCardData = newSourceColumn.cards.filter(
    (item) => item.id === draggedCardId
  )[0];

  newDestColumn.cards = [...newDestColumn.cards, draggedCardData];
  const index = newSourceColumn.cards.indexOf(draggedCardData);

  newSourceColumn.cards.splice(index, 1);

  const newColumns = data.columns.map((eachColumn) => {
    switch (eachColumn.id) {
      case destColumnId:
        return newDestColumn;
      case srcColumnId:
        return newSourceColumn;
      default:
        return eachColumn;
    }
  });

  return { columns: newColumns };
};

export const getColumnAddedToData = (data, title) => {
  let newColumns = [
    ...data.columns,
    { cards: [], id: getUniqueId(), isNew: true, title },
  ];

  return { columns: newColumns };
};

export const deleteColumn = (columnId, data) => {
  const deletingColumn = data.columns.filter((item) => item.id === columnId)[0];
  const index = data.columns.indexOf(deletingColumn);

  let columns = data.columns;
  columns.splice(index, 1);

  return { columns: columns };
};

export const getUniqueId = () => {
  return parseInt(_.uniqueId());
};

export const updateCardData = (cardData, columnId, data) => {
  const columnData = data.columns.filter((item) => item.id === columnId)[0];
  const newCards = columnData.cards.map((eachCard) => {
    if (eachCard.id === cardData.id) {
      return cardData;
    } else return eachCard;
  });

  columnData.cards = newCards;

  const newData = data.columns.map((eachColumn) => {
    if (eachColumn.id === columnId) {
      return columnData;
    } else return eachColumn;
  });

  return { columns: newData };
};
export const addNewCard = (title, columnId, data) => {
  const newCard = { id: getUniqueId(), title, color: "#6498ff" };
  console.log("data", data);

  const columnObject = data.columns.filter((item) => item.id === columnId)[0];
  columnObject.cards = [...columnObject.cards, newCard];

  const newData = data.columns.map((eachColumn) => {
    if (eachColumn.id === columnId) {
      return columnObject;
    }

    return eachColumn;
  });

  return { columns: newData };
};
