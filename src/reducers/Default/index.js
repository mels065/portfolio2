import {
  DEFAULT_HELLO,
  DEFAULT_BYE,
  MESSAGE_HELLO,
  MESSAGE_BYE,
} from '../../constants/Default';

const defaultReducer = (state = {
  message: 'Hello World',
}, action) => {
  switch (action.type) {
    case DEFAULT_HELLO: {
      return { ...state, message: MESSAGE_HELLO };
    }
    case DEFAULT_BYE: {
      return { ...state, message: MESSAGE_BYE };
    }
    default: {
      return state;
    }
  }
};

export default defaultReducer;
