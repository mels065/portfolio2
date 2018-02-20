import {
  INCREMENT,
  DECREMENT,
  SPINNER_UPDATE,
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
      return { ...state, spinnerVal: action.newSpinnerVal };
    }
    default: {
      return state;
    }
  }
};

export default counterReducer;
