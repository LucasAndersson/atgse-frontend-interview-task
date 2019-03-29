import React from 'react';

function Start(props) {
    return (
        <tr>
            <td>{props.number}</td>
            <td>{props.horse}</td>
            <td>{props.driver}</td>
            <td>{props.trainer}</td>
            <td>{props.sire}</td>
        </tr>
    );
}

export default Start;
