import React from "react";
import Guess from "../Guess";

function GuessResults({ guessList, answer }) {
  return (
    <div className="guess-results">
      {guessList.map((guess, index) => (
        <Guess key={index} guess={guess} answer={answer} />
      ))}
    </div>
  );
}

export default GuessResults;
