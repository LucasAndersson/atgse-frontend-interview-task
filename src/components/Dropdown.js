import React from 'react';
import PropTypes from 'prop-types';

function Dropdown(props) {
    return (
        <select onChange={props.handleChange}>
            {props.values.map((v, i) => <option key={i} value={v}>{v}</option>)}
        </select>
    );
}

Dropdown.propTypes = {
    handleChange: PropTypes.func,
    values: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Dropdown;
