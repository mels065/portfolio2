import React from 'react';
import PropTypes from 'prop-types';

import CounterSpinner from './CounterSpinner';
import CounterButton from './CounterButton';

import './style.scss';

const CounterInput = ({
  spinnerVal,
  incrementCounter,
  decrementCounter,
  onSpinnerChange,
}) => (
  <div className="counter--input">
    <CounterSpinner spinnerVal={spinnerVal} onSpinnerChange={onSpinnerChange} />
    <CounterButton
      text="Increment"
      spinnerVal={spinnerVal}
      clickHandler={incrementCounter}
    />
    <CounterButton
      text="Decrement"
      spinnerVal={spinnerVal}
      clickHandler={decrementCounter}
    />
  </div>
);

export default CounterInput;

CounterInput.propTypes = {
  spinnerVal: PropTypes.number.isRequired,
  incrementCounter: PropTypes.func.isRequired,
  decrementCounter: PropTypes.func.isRequired,
  onSpinnerChange: PropTypes.func.isRequired,
};
