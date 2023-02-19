import React from "react";

import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";
import { BLANK } from "../../constants";

function Guess({ guess, answer }) {
  const checkedGuess =
    guess === BLANK
      ? range(0, 5).map(() => ({ letter: "", status: "" }))
      : checkGuess(guess, answer);

  return (
    <p className="guess">
      {checkedGuess.map((result, index) => (
        <span key={index} className={`cell ${result.status}`.trim()}>
          {result.letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
