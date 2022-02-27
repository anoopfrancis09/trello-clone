import { useState } from "react";
import CardEditView from "./CardEditView";

function ColorBox(props) {
  const { selected, color, onColorChange } = props;
  return (
    <div
      onClick={(e) => onColorChange(color)}
      className={selected ? `colorBox selectedColor ${color}` : "colorBox"}
      style={{
        "--d": color,
      }}
    ></div>
  );
}

export default ColorBox;
