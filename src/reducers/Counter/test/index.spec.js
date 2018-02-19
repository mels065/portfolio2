import { expect } from 'chai';

import counterReducer from '../../Counter';

import {
  INCREMENT,
  DECREMENT,
} from '../../../constants/Counter';

describe('counterReducer', () => {
  it('returns default state when given an invalid action', () => {
    expect(counterReducer(undefined, { type: 'invalid', amount: 1 }).counter).to.equal(0);
  });

  it(`returns state incremented by payload amount when given an action of type ${INCREMENT}`, () => {
    expect(counterReducer(undefined, { type: INCREMENT, amount: 1 }).counter).to.equal(1);
  });

  it(`returns state decremented by payload amount when given an action of type ${DECREMENT}`, () => {
    expect(counterReducer(undefined, { type: DECREMENT, amount: 1 }).counter).to.equal(-1);
  });
});
