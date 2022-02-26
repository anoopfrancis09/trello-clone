import logo from "./logo.svg";
import "./App.css";
import { useRef, useState } from "react";
import HomePage from "./components/HomePage";

function App() {
  const container = useRef(null);
  const scrollHandler = () => {
    // const container = document.getElementById("mainContainer");
    console.log("container.current", container, container.current.scrollLeft);
    // container.current.setScrollLeft(1000);
    // container.current.scrollBy(100, 100);
  };
  return (
    <div ref={container} className="App" id="mainContainer">
      <HomePage scrollContainer={scrollHandler} />
    </div>
  );
}

export default App;
