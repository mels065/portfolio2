import { expect } from 'chai';
import messageReducer from '../../Message';
import {
  MESSAGE_HELLO,
  MESSAGE_BYE,
  MESSAGE_HELLO_MSG,
  MESSAGE_BYE_MSG,
} from '../../../constants/Message';

const INVALID = { type: 'INVALID_ACTION' };
const HELLO = { type: MESSAGE_HELLO };
const BYE = { type: MESSAGE_BYE };

describe('messageReducer', () => {
  it('has "Hello World" as message state by default', () => {
    expect(messageReducer(undefined, INVALID).message)
      .to.equal(MESSAGE_HELLO_MSG);
  });

  it('sets message state to "Hello World" when given MESSAGE_HELLO action', () => {
    expect(messageReducer('', HELLO).message)
      .to.equal(MESSAGE_HELLO_MSG);
  });

  it('sets message state to "Bye World" when given MESSAGE_BYE action', () => {
    expect(messageReducer('', BYE).message)
      .to.equal(MESSAGE_BYE_MSG);
  });
});
