import React, { useState } from "react";

function App() {
  let [time, setTime] = useState(new Date().toLocaleTimeString().split(" "));

  function gitTime() {
    setTime(new Date().toLocaleTimeString().split(" "));
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={gitTime}>Get Time</button>
    </div>
  );
}

export default App;
