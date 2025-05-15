import React from "react";
import clsx from "clsx";
import useMeasure from "react-use-measure";
import Confetti from "react-confetti";
import { languages } from "./languages";
import { getFarewellText, getRandomWord } from "./util";

import EndgameCSS from "./endgame.module.css";

export default function App() {
  // state values
  const [currentWord, setCurrentWord] = React.useState(() =>
    getRandomWord().toUpperCase().split("")
  );
  const [guessedLetters, setGussedLetters] = React.useState([]);

  // derived values
  const wrongGuessCount = guessedLetters.filter(
    (letter) => !currentWord.includes(letter)
  ).length;
  const isLastGussedIncorrect =
    wrongGuessCount > 0 && !currentWord.includes(guessedLetters.at(-1));

  const isGameWon = currentWord.every((letter) =>
    guessedLetters.includes(letter)
  );
  const isGameOver = isGameWon || wrongGuessCount >= languages.length - 1;

  // static values
  const alphabets = "abcdefghijklmnopqrstuvwxyz".toUpperCase();

  function onGuess(letter) {
    setGussedLetters((prev) =>
      prev.includes(letter) ? prev : [...prev, letter]
    );
  }

  function startNewGame() {
    setCurrentWord(getRandomWord().toUpperCase().split(""));
    setGussedLetters([]);
  }

  // some extra features
  const [bodyRef, bounds] = useMeasure();

  const btnRef = React.useRef(null);
  React.useEffect(() => {
    if (isGameOver) btnRef.current.focus();
  }, [isGameOver]);

  // generating elements list

  const languageChips = languages.map((lang, idx) => (
    <div
      key={lang.name}
      style={{
        color: lang.color,
        backgroundColor: lang.backgroundColor,
      }}
      className={clsx(
        EndgameCSS["chip"],
        idx < wrongGuessCount && [EndgameCSS["lost"]]
      )}
    >
      {lang.name}
    </div>
  ));

  const letterElements = currentWord.map((letter, idx) => (
    <div
      key={idx}
      style={{
        color: isGameOver && !guessedLetters.includes(letter) && " #EC5D49",
      }}
    >
      {isGameOver || guessedLetters.includes(letter) ? letter : ""}
    </div>
  ));

  const keyElements = alphabets.split("").map((letter) => {
    const isGussed = guessedLetters.includes(letter);
    const isRight = isGussed && currentWord.includes(letter);
    const isWrong = isGussed && !currentWord.includes(letter);

    return (
      <button
        disabled={isGameOver}
        aria-disabled={guessedLetters.includes(letter)}
        aria-label={`Letter ${letter}`}
        className={clsx({
          [EndgameCSS.right]: isRight,
          [EndgameCSS.wrong]: isWrong,
        })}
        onClick={() => onGuess(letter)}
        key={letter}
      >
        {letter}
      </button>
    );
  });

  return (
    <div ref={bodyRef} className={EndgameCSS["body"]}>
      {isGameWon && (
        <Confetti
          recycle={false}
          numberOfPieces={1000}
          width={bounds.width}
          height={bounds.height}
        />
      )}

      <main className={EndgameCSS["assembly-endgame"]}>
        {/* title section */}
        <section className={EndgameCSS["title-section"]}>
          <h1 className={EndgameCSS["title"]}>Assembly: Endgame</h1>
          <p className={EndgameCSS["description"]}>
            Guess the word in under 8 attempts to keep the programming world
            safe from Assembly!
          </p>
        </section>

        {/* Status section */}
        <section
          aria-live="polite"
          role="status"
          className={clsx(EndgameCSS["status-section"], {
            [EndgameCSS["win"]]: isGameOver && isGameWon,
            [EndgameCSS["lose"]]: isGameOver && !isGameWon,
            [EndgameCSS["farewell"]]: !isGameOver && isLastGussedIncorrect,
          })}
        >
          {isGameOver ? (
            <>
              <h3 className={EndgameCSS["title"]}>
                {isGameWon ? "You Win!" : "Game Over!"}
              </h3>
              <p className={EndgameCSS["description"]}>
                {isGameWon
                  ? "Well done! 🎉"
                  : "You lose! Better start learning Assembly 😭"}
              </p>
            </>
          ) : (
            isLastGussedIncorrect && (
              <p>{getFarewellText(languages[wrongGuessCount - 1].name)}</p>
            )
          )}
        </section>

        {/* language chips */}
        <section className={EndgameCSS["languages-chips"]}>
          {languageChips}
        </section>

        {/* Word */}
        <section className={EndgameCSS["word"]}>{letterElements}</section>

        {/* Combined visually-hidden aria-live region for status updates */}
        <section
          className={EndgameCSS["sr-only"]}
          aria-live="polite"
          role="status"
        >
          <p>
            {guessedLetters.length > 0 &&
              (isLastGussedIncorrect
                ? `Sorry!, the letter ${guessedLetters.at(
                    -1
                  )} is not in the word.`
                : `Correct!, the letter ${guessedLetters.at(
                    -1
                  )} is in the word.`)}
            You have {languages.length - 1} attempts left!
          </p>
          <p>
            Current word:
            {currentWord
              .map((letter) =>
                guessedLetters.includes(letter) ? letter + "." : "blank."
              )
              .join(" ")}
          </p>
        </section>

        {/* keyboard */}
        <section className={EndgameCSS["keyboard"]}>{keyElements}</section>

        {/* new game button */}
        {isGameOver ? (
          <button
            ref={btnRef}
            className={EndgameCSS["new-game"]}
            onClick={startNewGame}
          >
            New Game
          </button>
        ) : (
          <div style={{ height: "2.5rem" }}></div>
        )}
      </main>
    </div>
  );
}
