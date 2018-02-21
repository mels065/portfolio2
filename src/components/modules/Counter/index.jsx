import React from 'react';
import PropTypes from 'prop-types';

import { Container } from 'semantic-ui-react';

import CounterInput from '../CounterInput';
import CounterDisplay from '../CounterDisplay';

import './style.scss';

const Counter = ({ counter, spinnerVal, incrementCounter, decrementCounter, onSpinnerChange }) => (
    <Container className="counter">
        <CounterDisplay counter={counter} />
        <CounterInput
            spinnerVal={spinnerVal}
            incrementCounter={incrementCounter}
            decrementCounter={decrementCounter}
            onSpinnerChange={onSpinnerChange}
        />
    </Container>
);

export default Counter;

Counter.propTypes = {
    spinnerVal: PropTypes.number.isRequired,
    incrementCounter: PropTypes.func.isRequired,
    decrementCounter: PropTypes.func.isRequired,
    onSpinnerChange: PropTypes.func.isRequired,
};
