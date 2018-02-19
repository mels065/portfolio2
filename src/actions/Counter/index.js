import {
  INCREMENT,
  DECREMENT,
} from '../../constants/Counter';

export const incrementAction = amount => (
  {
    type: INCREMENT,
    amount,
  }
);

export const decrementAction = amount => (
  {
    type: DECREMENT,
    amount,
  }
);
