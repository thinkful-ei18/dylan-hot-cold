import React from 'react';

export default function Guess(props) {
  return (
    <p className="guess-number">
      {props.guess.number} was {props.guess.temperature}
    </p>
  );
}
