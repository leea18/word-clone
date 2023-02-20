import React from "react";

import { RefreshCw } from "react-feather";

function GameOverBanner({ win, guessNum, answer, resetGame }) {
  return win ? (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {guessNum} guess{guessNum === 1 ? "" : "es"}
        </strong>
        .
      </p>
      <button onClick={resetGame}>
        <RefreshCw />
      </button>
    </div>
  ) : (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
      <button onClick={resetGame}>
        <RefreshCw />
      </button>
    </div>
  );
}

export default GameOverBanner;
