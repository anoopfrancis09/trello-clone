import logo from "./logo.svg";
import "./App.css";
import { useRef, useState } from "react";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="App" id="mainContainer">
      <HomePage />
    </div>
  );
}

export default App;
