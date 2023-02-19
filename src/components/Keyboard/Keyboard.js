import React from "react";

import { checkGuess } from "../../game-helpers";

const LAYOUT = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];

function emptyStats() {
  const abc = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  return abc.reduce((obj, current) => {
    obj[current] = "";
    return obj;
  }, {});
}

function computeStats(guessList, answer) {
  return guessList
    .map((guess) => checkGuess(guess, answer))
    .flatMap((obj) => obj)
    .reduce((stats, current) => {
      // prevent "correct" downgrade to "misplaced"
      if (stats[current.letter] !== "correct") {
        stats[current.letter] = current.status;
      }
      return stats;
    }, emptyStats());
}

function Keyboard({ guessList, answer }) {
  const stats = computeStats(guessList, answer);
  return (
    <>
      {LAYOUT.map((row, index) => (
        <div key={index} className={`keyboard row${index}`}>
          {[...row].map((ch) => (
            <span key={ch} className={`keycap ${stats[ch]}`}>
              {ch}
            </span>
          ))}
        </div>
      ))}
    </>
  );
}

export default Keyboard;
