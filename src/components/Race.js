import React, { Component } from 'react';
import Starts from './Starts';
import PropTypes from 'prop-types';

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

Race.propTypes = {
    raceNumber: PropTypes.number,
    raceName: PropTypes.string,
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
};

export default Race;
