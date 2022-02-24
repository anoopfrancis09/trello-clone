import { getUniqueId } from "../utils";
export const data = {
  columns: [
    {
      cards: [
        { id: getUniqueId(), title: "Card 11" },
        { id: getUniqueId(), title: "Card 12" },
      ],
      id: getUniqueId(),
      title: "Not yet Started",
    },
    {
      cards: [{ id: getUniqueId(), title: "Card 2" }],
      id: getUniqueId(),
      title: "In Prgress",
    },
    {
      cards: [
        { id: getUniqueId(), title: "Card 31" },
        { id: getUniqueId(), title: "Card 32" },
        { id: getUniqueId(), title: "Card 33" },
      ],
      id: getUniqueId(),
      title: "Done",
    },
  ],
};
