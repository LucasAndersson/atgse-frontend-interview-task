import React from 'react';
import Start from './Start';

function Starts(props) {
    return (
        <td>
            <table>
                <thead>
                    <tr>
                        <th>Start number</th>
                        <th>Horse name</th>
                        <th>Driver name</th>
                        <th>Trainer name</th>
                        <th>Sire name</th>
                    </tr>
                </thead>
                <tbody>
                    {props.starts.map((start, i) => <Start
                        key={i}
                        number={start.number}
                        horse={start.horse.name}
                        driver={start.driver.firstName + ' ' + start.driver.lastName}
                        trainer={start.horse.trainer.firstName + ' ' + start.horse.trainer.lastName}
                        sire={start.horse.pedigree.father.name}
                    />)}
                </tbody>
            </table>
        </td>
    );
}

export default Starts;
