import React, { Component } from 'react';
import Dropdown from './Dropdown';
import Races from './Races';
import './App.css';

const INITIAL_GAME_TYPE = 'V75';
const GAME_TYPES = [INITIAL_GAME_TYPE, 'V65', 'V64', 'V4'];

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
        <Dropdown handleChange={this.handleChange} values={GAME_TYPES} />
        <Races races={this.state.games.flatMap(game => game.races)} />
      </>
    );
  }
}

export default App;
