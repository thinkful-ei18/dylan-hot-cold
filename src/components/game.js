import React from 'react';

import Guess from './guess';
import GuessCount from './guessCount';

import './game.css';

export default function Game(props) {
  function makeGuessList() {
    return props.guesses.map((item, index) => (
      <li key={index}>
        <Guess guess={item} />
      </li>
    ));
  }

  return <div>
      <div className="game-title">
        <h2>Make your Guess</h2>
      </div>
      <form className="guess-form">
        <div className="guess-input">
          <label>
            <input type="text" name="guess" value="Enter your guess" id="guess-field" />
          </label>
        </div>
        <input type="submit" value="Submit" id="guess-button" />
      </form>
      <div className="guess-count">
        <GuessCount guess={props.guessCount} />
        <p>Cold</p>
      </div>
      <ul className="guess-list">{makeGuessList()}</ul>
    </div>;
}
