import { useState } from "react";
import ColorBox from "./ColorBlock";

function ColorContainer(props) {
  const { cardData, onColorChange } = props;
  const [selectedColor, setSelectedColor] = useState(cardData.color);

  const onChange = (color) => {
    onColorChange(color);
    setSelectedColor(color);
  };

  const onCustomColorSelection = (e) => {
    onColorChange(e.target.value);
    setSelectedColor(e.target.value);
  };

  return (
    <div className="colorBox-container">
      <p>Pick banner color: </p>
      <ColorBox
        onColorChange={onChange}
        selected={selectedColor === "yellow" ? true : false}
        color="yellow"
      />
      <ColorBox
        onColorChange={onChange}
        selected={selectedColor === "aquamarine" ? true : false}
        color="aquamarine"
      />
      <ColorBox
        onColorChange={onChange}
        selected={selectedColor === "gold" ? true : false}
        color="gold"
      />
      <ColorBox
        onColorChange={onChange}
        selected={selectedColor === "lightgreen" ? true : false}
        color="lightgreen"
      />
      <ColorBox
        onColorChange={onChange}
        selected={selectedColor === "lightpink" ? true : false}
        color="lightpink"
      />
      <ColorBox
        onColorChange={onChange}
        selected={selectedColor === "lightsteelblue" ? true : false}
        color="lightsteelblue"
      />
      <p className="customColorLabel">Custom: </p>
      <input
        className={"colorBox"}
        onChange={onCustomColorSelection}
        type="color"
        id="myColor"
        defaultValue={selectedColor}
      />
    </div>
  );
}

export default ColorContainer;
