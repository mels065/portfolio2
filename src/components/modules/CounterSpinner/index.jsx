import React from 'react';
import PropTypes from 'prop-types';

import { Input } from 'semantic-ui-react';

import './style.scss';

const CounterSpinner = ({ spinnerVal, onSpinnerChange }) => (
    <Input
        className="counter-spinner"
        onChange={onSpinnerChange}
        type="number"
        value={spinnerVal}
        min="0"
        max="100"
    />
);

export default CounterSpinner;

CounterSpinner.propTypes = {
    spinnerVal: PropTypes.number.isRequired,
    onSpinnerChange: PropTypes.func.isRequired,
};
