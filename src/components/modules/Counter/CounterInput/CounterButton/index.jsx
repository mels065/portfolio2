import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const CounterButton = ({
  text,
  spinnerVal,
  clickHandler,
}) => (
  <button
    className="counter--btn"
    onClick={() => { clickHandler(Number(spinnerVal)); }}
  >
    {text}
  </button>
);

export default CounterButton;

CounterButton.propTypes = {
  text: PropTypes.string.isRequired,
  spinnerVal: PropTypes.number.isRequired,
  clickHandler: PropTypes.func.isRequired,
};
