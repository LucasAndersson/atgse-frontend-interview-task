import React from 'react';
import Starts from './Starts';

function Race(props) {
    return (
        <tr>
            <td>{props.number}</td>
            <td>{props.name}</td>
            <td>{props.startTime}</td>
            <Starts starts={props.starts} />
        </tr>
    );
}

export default Race;
