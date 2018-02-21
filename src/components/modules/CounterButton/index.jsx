import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'semantic-ui-react';

import './style.scss';

const CounterButton = ({ spinnerVal, clickHandler, color }) => (
    <Button
        className="counter-btn"
        onClick={() => { clickHandler(spinnerVal) }}
        color={color}
    />
);

export default CounterButton;

CounterButton.propTypes = {
    spinnerVal: PropTypes.number.isRequired,
    clickHandler: PropTypes.func.isRequired,
    color: PropTypes.string,
};

CounterButton.defaultTypes = {
    color: 'blue',
}
