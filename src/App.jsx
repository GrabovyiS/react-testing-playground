import Pokemon from "./components/Pokemon";

import { useEffect, useState } from "react";
import "./App.css";

const getRandomOffset = () => {
  return Math.floor(Math.random() * 1000);
};

const App = () => {
  const [heading, setHeading] = useState("Я тебя люблю");
  const [offset, setOffset] = useState(getRandomOffset());
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

  const handleGetPokemon = () => {
    const randomOffset = getRandomOffset();
    setOffset(randomOffset);
  };

  return (
    <>
      <header>
        <Pokemon key={offset} offset={offset} />
      </header>
      <main>
        <h1>{heading}</h1>
        <h2>{counter}</h2>
        <div onClick={handleIncrement}>
          <p>click me increment</p>
        </div>
        <div onClick={handleGetPokemon}>
          <p>click me get pokemon</p>
        </div>
        <button type="button" onClick={handleClick}>
          Change heading
        </button>
      </main>
    </>
  );
};

export default App;
