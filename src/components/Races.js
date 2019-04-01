import React from 'react';
import Race from './Race';

function Races(props) {
    return (
        <table>
            <tbody>
                <tr className='Races-tr'>
                    <th>Race number</th>
                    <th>Race name</th>
                    <th>Race start time</th>
                </tr>
                {props.races.map(race => <Race
                    key={race.id}
                    raceNumber={race.number}
                    raceName={race.name}
                    startTime={race.startTime}
                    starts={race.starts}
                />)}
            </tbody>
        </table>
    );
}

export default Races;
