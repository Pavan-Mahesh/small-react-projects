import React from "react";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

import Die from "./components/Die.jsx";

export default function App() {
  const INVALID_MOVE = "❗Release them all to pick a new number!";
  const GAME_WON = "🥳Tenzies!🎉";

  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);

  React.useEffect(() => {
    function watchWindowResize() {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }

    window.addEventListener("resize", watchWindowResize);
  }, []);

  const [dice, setDice] = React.useState(() => generateAllNewDice());
  const [feedback, setFeedback] = React.useState("");
  const [rollsCount, setTriggerAnimation] = React.useState(0);

  const diceHeld = React.useRef(0);
  const selectedValue = React.useRef(null);

  const gameWon = feedback === GAME_WON;

  const btnRef = React.useRef(null);

  React.useEffect(() => {
    if (gameWon) {
      // this is to ensure that the last seleced die have its
      // own time to perfrom his hover and active transitions
      // especially in the mobile broswers
      setTimeout(() => {
        btnRef.current.focus();
      }, 300);
    }
  }, [gameWon]);

  function generateAllNewDice() {
    // returning a die object
    return new Array(10).fill(0).map(() => ({
      id: nanoid(),
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
    }));
  }

  function rollDice() {
    if (gameWon) {
      // new game
      setDice(generateAllNewDice());
      updateFeedback("");
      setTriggerAnimation(0);

      diceHeld.current = 0;
      selectedValue.current = null;
    } else {
      // preserving held values and set random values to others
      updateFeedback("");
      setTriggerAnimation((prev) => prev + 1);

      setDice((prevDice) =>
        prevDice.map((dieObj) =>
          dieObj.isHeld
            ? dieObj
            : { ...dieObj, value: Math.ceil(Math.random() * 6) }
        )
      );
    }
  }

  function handleClick(dieObj) {
    // user already won the game, so no more changes
    if (diceHeld.current === 10) return;

    // releasing a die
    if (dieObj.isHeld) {
      updateFeedback("");

      diceHeld.current--;

      toggleHold(dieObj.id);
      return;
    }

    // user selecting a die with new value
    if (diceHeld.current === 0) selectedValue.current = dieObj.value;

    if (selectedValue.current === dieObj.value) {
      updateFeedback("");

      diceHeld.current++;
      if (diceHeld.current === 10) updateFeedback(GAME_WON);

      toggleHold(dieObj.id);
    } else {
      updateFeedback(INVALID_MOVE);
    }
  }

  function toggleHold(id) {
    setDice((prevDice) =>
      prevDice.map((dieObj) =>
        dieObj.id === id ? { ...dieObj, isHeld: !dieObj.isHeld } : dieObj
      )
    );
  }

  function updateFeedback(message) {
    if (feedback !== message) setFeedback(message);
  }

  const diceElements = dice.map((dieObj) => (
    <Die
      key={dieObj.id}
      value={dieObj.value}
      isHeld={dieObj.isHeld}
      rollsCount={rollsCount}
      handleClick={() => handleClick(dieObj)}
    />
  ));

  return (
    <main id="game-container">
      {gameWon && <Confetti width={width - 1} height={height - 1} />}

      <div className="sr-only" aria-live="polite">
        {gameWon && (
          <p>Congratulations! You Won! Press "New Game" to start again.</p>
        )}
      </div>

      <div id="game-header">
        <h1 className="title">Tenzies</h1>
        <p className="instructions">
          Roll until all dice are the same.
          <br />
          Click a die to hold — click again to release.
        </p>
      </div>

      <div id="dice-container">{diceElements}</div>

      <p id="feedback">{feedback}</p>

      <button ref={btnRef} id="roll" onClick={rollDice}>
        {gameWon ? "New game" : "Roll"}
      </button>
    </main>
  );
}
