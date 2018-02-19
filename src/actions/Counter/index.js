import {
  INCREMENT,
  DECREMENT,
  SPINNER_UPDATE,
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

export const spinnerUpdateAction = newVal => (
  {
    type: SPINNER_UPDATE,
    newVal,
  }
);
