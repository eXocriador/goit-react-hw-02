import { useState, useEffect } from "react";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";

import "./App.css";

function App() {
  return (
    <>
      <Description />
      <Feedback />
      <Options />
    </>
  );
}

export default App;
