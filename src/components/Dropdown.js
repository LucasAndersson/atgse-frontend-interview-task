import React from 'react';

function Dropdown(props) {
    return (
        <select onChange={props.handleChange}>
            {props.values.map((v, i) => <option key={i} value={v}>{v}</option>)}
        </select>
    );
}

export default Dropdown;
