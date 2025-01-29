import { useState, useEffect } from "react";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";

import "./App.css";

function App() {
  const feedbackType = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  const [feedback, setFeedback] = useState(feedbackType);
  const handleFeedback = (type) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };
  return (
    <>
      <Description />
      <Feedback />
      <Options />
    </>
  );
}

export default App;
