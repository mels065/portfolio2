import { expect } from 'chai';

import {
  incrementAction,
  decrementAction,
} from '../../Counter';

import {
  INCREMENT,
  DECREMENT,
} from '../../../constants/Counter';

describe('incrementAction', () => {
  it(`has type ${INCREMENT}`, () => {
    expect(incrementAction(1).type).to.equal(INCREMENT);
  });

  it('assigns an `amount` value to payload', () => {
    expect(incrementAction(1).amount).to.equal(1);
  });
});

describe('decrementAction', () => {
  it(`has type ${DECREMENT}`, () => {
    expect(decrementAction(1).type).to.equal(DECREMENT);
  });

  it('assigns an `amount` value to payload', () => {
    expect(decrementAction(1).amount).to.equal(1);
  });
});
