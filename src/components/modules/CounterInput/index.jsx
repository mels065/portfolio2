import React from 'react';
import PropTypes from 'prop-types';

import { Container } from 'semantic-ui-react';

import CounterSpinner from '../CounterSpinner';
import CounterButton from '../CounterButton';

import './style.scss';

const CounterInput = ({ spinnerVal, incrementCounter, decrementCounter, onSpinnerChange }) => (
    <Container className="counter-input">
        <CounterSpinner spinnerVal={spinnerVal} onSpinnerChange={onSpinnerChange} />
        <CounterButton spinnerVal onClick={incrementCounter} color="green" />
        <CounterButton spinnerVal onClick={decrementCounter} color="red" />
    </Container>
);

export default CounterInput;

CounterInput.propTypes = {
    spinnerVal: PropTypes.number.isRequired,
    incrementCounter: PropTypes.func.isRequired,
    decrementCounter: PropTypes.func.isRequired,
    onSpinnerChange: PropTypes.func.isRequired,
};
