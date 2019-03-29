import React from 'react';
import Game from './Game';
import './Games.css';

function Games(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Game type</th>
                    <th>Races information</th>
                </tr>
            </thead>
            <tbody>
                {props.games.map(game => <Game
                    key={game.id}
                    gameType={props.gameType}
                    races={game.races}
                />)}
            </tbody>
        </table>
    );
}

export default Games;
