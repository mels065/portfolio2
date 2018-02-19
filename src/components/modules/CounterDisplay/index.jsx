import React from 'react';
import PropTypes from 'prop-types';

import { Header } from 'semantic-ui-react';

import './style.scss';

const CounterDisplay = ({ counter }) => (
  <Header className="counter-display" as="h2">
    {counter}
  </Header>
);

export default CounterDisplay;

CounterDisplay.propTypes = {
  counter: PropTypes.number.isRequired,
};
