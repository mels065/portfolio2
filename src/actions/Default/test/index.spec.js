import { expect } from 'chai';

import {
  defaultHello,
  defaultBye,
} from '../../Default';

import {
  DEFAULT_HELLO,
  DEFAULT_BYE,
} from '../../../constants/Default';

describe('defaultHello action', () => {
  it('returns the correct action', () => {
    expect(defaultHello()).to.have.property('type', DEFAULT_HELLO);
  });
});

describe('defaultBye action', () => {
  it('returns the correct action', () => {
    expect(defaultBye()).to.have.property('type', DEFAULT_BYE);
  });
});
