import React from 'react';
import PropTypes from 'prop-types';

import {
  SPINNER_MIN,
  SPINNER_MAX,
} from '../../../../../constants/Counter';

import './style.scss';

const CounterSpinner = ({ spinnerVal, onSpinnerChange }) => (
  <input
    className="counter--spinner"
    onChange={event => onSpinnerChange(Number(event.target.value))}
    type="number"
    value={spinnerVal}
    min={SPINNER_MIN}
    max={SPINNER_MAX}
  />
);

export default CounterSpinner;

CounterSpinner.propTypes = {
  spinnerVal: PropTypes.number.isRequired,
  onSpinnerChange: PropTypes.func.isRequired,
};
