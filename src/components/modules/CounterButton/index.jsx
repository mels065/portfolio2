import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'semantic-ui-react';

import './style.scss';

const CounterButton = ({
  text,
  spinnerVal,
  clickHandler,
  color,
}) => (
  <Button
    className="counter-btn"
    onClick={() => { clickHandler(Number(spinnerVal)); }}
    color={color}
  >
    {text}
  </Button>
);

export default CounterButton;

CounterButton.propTypes = {
  text: PropTypes.string.isRequired,
  spinnerVal: PropTypes.number.isRequired,
  clickHandler: PropTypes.func.isRequired,
  color: PropTypes.string,
};

CounterButton.defaultProps = {
  color: 'blue',
};
