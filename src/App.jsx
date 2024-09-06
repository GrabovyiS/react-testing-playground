import { useState } from "react";
import "./App.css";

const App = () => {
  const [heading, setHeading] = useState("Я тебя люблю");

  const handleClick = () => {
    setHeading("Давай встречаться");
  };

  return (
    <>
      <main>
        <h1>{heading}</h1>
        <button type="button" onClick={handleClick}>
          Change heading
        </button>
      </main>
    </>
  );
};

export default App;
