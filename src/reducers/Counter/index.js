import {
  INCREMENT,
  DECREMENT,
} from '../../constants/Counter';

const counterReducer = (
  state = {
    counter: 0,
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
    default: {
      return state;
    }
  }
};

export default counterReducer;
