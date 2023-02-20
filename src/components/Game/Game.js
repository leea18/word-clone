import React from "react";

import { sample, range } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED, BLANK } from "../../constants";

import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import GameOverBanner from "../GameOverBanner";
import Keyboard from "../Keyboard";

function Game() {
  const [answer, setAnswer] = React.useState(generateAnswer);
  const [guessNum, setGuessNum] = React.useState(0);
  const [guessList, setGuessList] = React.useState(emptyGuesses);

  function generateAnswer() {
    const answer = sample(WORDS);
    // To make debugging easier, we'll log the solution in the console.
    console.info({ answer });

    return answer;
  }

  function emptyGuesses() {
    return range(0, NUM_OF_GUESSES_ALLOWED).map(() => BLANK);
  }

  function addGuess(guess) {
    if (guessNum < NUM_OF_GUESSES_ALLOWED) {
      const nextGuessList = [...guessList];
      nextGuessList[guessNum] = guess;
      setGuessList(nextGuessList);
      setGuessNum(guessNum + 1);
    }
  }

  function resetGame() {
    setAnswer(generateAnswer());
    setGuessNum(0);
    setGuessList(emptyGuesses());
  }

  const win = guessList.includes(answer);
  const gameOver = win || guessNum === NUM_OF_GUESSES_ALLOWED;

  return (
    <>
      <GuessResults guessList={guessList} answer={answer} />
      <GuessInput addGuess={addGuess} disabled={gameOver} />
      <Keyboard guessList={guessList} answer={answer} />
      {gameOver && (
        <GameOverBanner
          win={win}
          guessNum={guessNum}
          answer={answer}
          resetGame={resetGame}
        />
      )}
    </>
  );
}

export default Game;
