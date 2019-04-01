import React from 'react';
import Race from './Race';
import PropTypes from 'prop-types';

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

Races.propTypes = {
    races: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        number: PropTypes.number,
        name: PropTypes.string,
        startTime: PropTypes.string,
        starts: PropTypes.arrayOf(PropTypes.shape({
            number: PropTypes.number,
            horse: PropTypes.shape({
                name: PropTypes.string,
                trainer: PropTypes.shape({
                    firstName: PropTypes.string,
                    lastName: PropTypes.string
                }),
                pedigree: PropTypes.shape({
                    father: PropTypes.shape({
                        name: PropTypes.string
                    })
                })
            }),
            driver: PropTypes.shape({
                firstName: PropTypes.string,
                lastName: PropTypes.string
            })
        })).isRequired
    })).isRequired
}

export default Races;
