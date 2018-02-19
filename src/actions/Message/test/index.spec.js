import { expect } from 'chai';

import {
  messageHello,
  messageBye,
} from '../../Message';

import {
  MESSAGE_HELLO,
  MESSAGE_BYE,
} from '../../../constants/Message';

describe('messageHello action', () => {
  it('returns the correct action', () => {
    expect(messageHello()).to.have.property('type', MESSAGE_HELLO);
  });
});

describe('messageBye action', () => {
  it('returns the correct action', () => {
    expect(messageBye()).to.have.property('type', MESSAGE_BYE);
  });
});
