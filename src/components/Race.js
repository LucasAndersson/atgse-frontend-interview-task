import React, { Component } from 'react';
import Starts from './Starts';

class Race extends Component {
    constructor() {
        super();
        this.state = { renderStarts: false };
    }

    handleClick = e => {
        this.setState({ renderStarts: !this.state.renderStarts });
    }

    render() {
        return (
            <>
                <tr className='Race-tr' onClick={this.handleClick}>
                    <td>{this.props.raceNumber}</td>
                    <td>{this.props.raceName}</td>
                    <td>{this.props.startTime}</td>
                </tr>
                {this.state.renderStarts && <Starts starts={this.props.starts} />}
            </>
        );
    }
}

export default Race;
