import {
  MESSAGE_HELLO,
  MESSAGE_BYE,
} from '../../constants/Message';

export const messageHello = () => (
  {
    type: MESSAGE_HELLO,
  }
);

export const messageBye = () => (
  {
    type: MESSAGE_BYE,
  }
);
