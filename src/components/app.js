import React from 'react';

import Game from './game';
import Header from './header';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guessCount: 4,
      guesses: [
        { number: 50, temperature: 'cold' },
        { number: 55, temperature: 'cold' },
        { number: 60, temperature: 'cold' }
      ],
      rightAnswer: 10
    };
  }

  render() {
    return (
      <div className="app">
        <header>
          <Header />
        </header>
        <div className="game">
          <Game {...this.state} />
        </div>
      </div>
    );
  }
}
