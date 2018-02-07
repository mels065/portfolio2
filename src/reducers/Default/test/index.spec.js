import { expect } from 'chai';
import defaultReducer from '../../Default';
import {
  DEFAULT_HELLO,
  DEFAULT_BYE,
} from '../../../constants/Default';

const defaultActions = {
  INVALID: {
    type: 'INVALID_ACTION',
  },
  HELLO: {
    type: DEFAULT_HELLO,
  },
  BYE: {
    type: DEFAULT_BYE,
  },
};

describe('defaultReducer', () => {
  it('has "Hello World" as message state by default', () => {
    expect(defaultReducer(undefined, defaultActions.INVALID).message)
      .to.equal('Hello World');
  });

  it('sets message state to "Hello World" when given DEFAULT_HELLO action', () => {
    expect(defaultReducer('', defaultActions.HELLO).message)
      .to.equal('Hello World');
  });

  it('sets message state to "Bye World" when given DEFAULT_BYE action', () => {
    expect(defaultReducer('', defaultActions.BYE).message)
      .to.equal('Bye World');
  });
});
