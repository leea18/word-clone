import React from "react";

function GuessInput({ addGuess, disabled }) {
  const [guessInput, setGuessInput] = React.useState("");

  function submitGuess(evt) {
    evt.preventDefault();
    if (guessInput.length === 5) { // '' seems to pass form validation...
      addGuess(guessInput);
      setGuessInput("");
    }
  }

  return (
    <form className="guess-input-wrapper" onSubmit={submitGuess}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        minLength="5"
        maxLength="5"
        pattern="[a-zA-Z]{5}"
        title="Exactly 5 letters"
        value={guessInput}
        onChange={(evt) => setGuessInput(evt.target.value.toUpperCase())}
        disabled={disabled}
      />
    </form>
  );
}

export default GuessInput;
