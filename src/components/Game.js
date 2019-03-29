import React from 'react';
import Races from './Races';

function Game(props) {
    return (
        <tr>
            <td>{props.gameType}</td>
            <Races races={props.races} />
        </tr>
    );
}

export default Game;
