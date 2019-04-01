import React from 'react';
import Start from './Start';
import PropTypes from 'prop-types';

function Starts(props) {
    return (
        <>
            <tr className='Starts-tr'>
                <th>Start number</th>
                <th>Horse name</th>
                <th>Driver name</th>
            </tr>
            {props.starts.map((start, i) => <Start
                key={i}
                startNumber={start.number}
                horseName={start.horse.name}
                driverName={start.driver.firstName + ' ' + start.driver.lastName}
                trainerName={start.horse.trainer.firstName + ' ' + start.horse.trainer.lastName}
                sireName={start.horse.pedigree.father.name}
            />)}
        </>
    );
}

Starts.propTypes = {
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
};

export default Starts;
