import React from 'react';
import Race from './Race';

function Races(props) {
    return (
        <td>
            <table>
                <thead>
                    <tr>
                        <th>Race number</th>
                        <th>Race name</th>
                        <th>Race start time</th>
                        <th>Starts information</th>
                    </tr>
                </thead>
                <tbody>
                    {props.races.map(race => <Race
                        key={race.id}
                        number={race.number}
                        name={race.name}
                        startTime={race.startTime}
                        starts={race.starts}
                    />)}
                </tbody>
            </table>
        </td>
    );
}

export default Races;
