import React from 'react';
import PropTypes from 'prop-types';

import CounterInput from './CounterInput';
import CounterDisplay from './CounterDisplay';

import './style.scss';

const Counter = ({
  counter,
  spinnerVal,
  incrementCounter,
  decrementCounter,
  onSpinnerChange,
}) => (
  <div className="counter">
    <CounterDisplay counter={counter} />
    <CounterInput
      spinnerVal={spinnerVal}
      incrementCounter={incrementCounter}
      decrementCounter={decrementCounter}
      onSpinnerChange={onSpinnerChange}
    />
  </div>
);

export default Counter;

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  spinnerVal: PropTypes.number.isRequired,
  incrementCounter: PropTypes.func.isRequired,
  decrementCounter: PropTypes.func.isRequired,
  onSpinnerChange: PropTypes.func.isRequired,
};
