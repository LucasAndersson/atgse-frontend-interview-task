import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Start extends Component {
    constructor() {
        super();
        this.state = { renderExtras: false };
    }

    handleClick = e => {
        this.setState({ renderExtras: !this.state.renderExtras });
    };

    render() {
        return (
            <>
                <tr className='Start-tr' onClick={this.handleClick}>
                    <td>{this.props.startNumber}</td>
                    <td>{this.props.horseName}</td>
                    <td>{this.props.driverName}</td>
                </tr>
                {this.state.renderExtras && (
                    <>
                        <tr>
                            <th>Trainer name</th>
                            <th>Sire name</th>
                        </tr>
                        <tr>
                            <td>{this.props.trainerName}</td>
                            <td>{this.props.sireName}</td>
                        </tr>
                    </>

                )}
            </>
        );
    }
}

Start.propTypes = {
    startNumber: PropTypes.number,
    horseName: PropTypes.string,
    driverName: PropTypes.string,
    trainerName: PropTypes.string,
    sireName: PropTypes.string
};

export default Start;
