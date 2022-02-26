import { getUniqueId } from "../utils";
export const data = {
  columns: [
    {
      cards: [
        { id: getUniqueId(), title: "Card 11", color: "#6498ff" },
        { id: getUniqueId(), title: "Card 12", color: "gold" },
      ],
      id: getUniqueId(),
      title: "Not yet Started",
    },
    {
      cards: [{ id: getUniqueId(), title: "Card 2", color: "aquamarine" }],
      id: getUniqueId(),
      title: "In Prgress",
    },
    {
      cards: [
        { id: getUniqueId(), title: "Card 31", color: "aquamarine" },
        { id: getUniqueId(), title: "Card 32", color: "#6498ff" },
        { id: getUniqueId(), title: "Card 33", color: "lightgreen" },
      ],
      id: getUniqueId(),
      title: "Done",
    },
  ],
};
