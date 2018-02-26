import React from 'react';

import './header.css';

export default function Header() {
  return <div>
      <nav>
        <p className="new-game">New Game</p>
        <p className="instructions">Instructions</p>
      </nav>
      <header>
        <h1>Hot or Cold</h1>
      </header>
    </div>;
}
