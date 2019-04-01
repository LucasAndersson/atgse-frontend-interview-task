import React from 'react';
import Start from './Start';

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

export default Starts;
