import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [heading, setHeading] = useState("Я тебя люблю");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(1);
  }, []);

  const handleClick = () => {
    setHeading("Давай встречаться");
  };

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <main>
        <h1>{heading}</h1>
        <h2>{counter}</h2>
        <div onClick={handleIncrement}>click</div>
        <button type="button" onClick={handleClick}>
          Change heading
        </button>
      </main>
    </>
  );
};

export default App;
