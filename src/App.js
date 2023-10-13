import React from "react";
import "./styles/App.scss";

import Accordion from "./components/accordion/Accordion.js";
import Card from "./components/card/Card.js";

const App = () => {
  return (
    <div className="App">
      <h1>Sass-React-Exp</h1>
      <Accordion header={"Click to expand"} content={"Accordion is open"}/>
      <Accordion header={"Click to expand"} content={"Accordion is open"}/>
      <Accordion header={"Click to expand"} content={"Accordion is open"}/>

      <Card/>
    </div>
  );
};

export default App;
