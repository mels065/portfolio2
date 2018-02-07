import {
  DEFAULT_HELLO,
  DEFAULT_BYE,
} from '../../constants/Default';

export const defaultHello = () => (
  {
    type: DEFAULT_HELLO,
  }
);

export const defaultBye = () => (
  {
    type: DEFAULT_BYE,
  }
);
