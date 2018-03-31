import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const CounterDisplay = ({ counter }) => (
  <h2 className="counter--display">
    {counter}
  </h2>
);

export default CounterDisplay;

CounterDisplay.propTypes = {
  counter: PropTypes.number.isRequired,
};
