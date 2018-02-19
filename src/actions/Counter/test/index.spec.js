import { expect } from 'chai';

import {
  incrementAction,
  decrementAction,
  spinnerUpdateAction,
} from '../../Counter';

import {
  INCREMENT,
  DECREMENT,
  SPINNER_UPDATE,
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

describe('spinnerUpdateAction', () => {
  it(`has type ${SPINNER_UPDATE}`, () => {
    expect(spinnerUpdateAction(5).type).to.equal(SPINNER_UPDATE);
  });
  
  it('assigns an `newVal` value to payload', () => {
    expect(spinnerUpdateAction(5).newSpinnerVal).to.equal(5);
  })
});
