import React, { Component } from 'react';
import Games from './Games';

const INITIAL_GAME_TYPE = 'V75';
//const GAME_TYPES = [INITIAL_GAME_TYPE, 'V65', 'V64', 'V4'];

class App extends Component {
  constructor() {
    super();
    this.state = { games: [] };
  }

  componentWillMount() {
    this.fetchGameSchedule(INITIAL_GAME_TYPE);
  }

  fetchGameSchedule(gameType) {
    fetch('/services/racinginfo/v1/api/products/' + gameType)
      .then(schedule => schedule.json())
      .then(schedule => {
        const upcoming = schedule.upcoming;

        if (upcoming !== undefined && upcoming.length !== 0) {
          this.fetchGames(upcoming);
        } else {
          this.fetchGames(schedule.results);
        }
      });
  }

  fetchGames(gameRefs) {
    const games = [];

    const promises = gameRefs.map(game => fetch('/services/racinginfo/v1/api/games/' + game.id)
      .then(game => game.json())
      .then(game => games.push(game)));

    Promise.all(promises)
      .finally(() => this.setState({ games: games }));
  }

  handleChange = e => {
    this.fetchGameSchedule(e.target.value);
  };

  render() {
    return (
      <>
        {/*<select onChange={this.handleChange}>
          {GAME_TYPES.map((gameType, i) => <option key={i} value={gameType}>{gameType}</option>)}
        </select>*/}
        <Games gameType='V75' games={this.state.games} />
      </>
    );
  }
}

export default App;
