import {
  INCREMENT,
  DECREMENT,
  SPINNER_UPDATE,
  SPINNER_MIN,
  SPINNER_MAX,
} from '../../constants/Counter';

const counterReducer = (
  state = {
    counter: 0,
    spinnerVal: 1,
  },
  action,
) => {
  switch (action.type) {
    case INCREMENT: {
      return { ...state, counter: state.counter + action.amount };
    }
    case DECREMENT: {
      return { ...state, counter: state.counter - action.amount };
    }
    case SPINNER_UPDATE: {
      let { newSpinnerVal } = action;
      if (newSpinnerVal < SPINNER_MIN) newSpinnerVal = SPINNER_MIN;
      else if (newSpinnerVal > SPINNER_MAX) newSpinnerVal = SPINNER_MAX;
      return { ...state, spinnerVal: newSpinnerVal };
    }
    default: {
      return state;
    }
  }
};

export default counterReducer;
