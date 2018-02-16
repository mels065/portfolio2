import {
  MESSAGE_HELLO,
  MESSAGE_BYE,
  MESSAGE_HELLO_MSG,
  MESSAGE_BYE_MSG,
} from '../../constants/Message';

const messageReducer = (
  state = {
    message: MESSAGE_HELLO_MSG,
  },
  action,
) => {
  switch (action.type) {
    case MESSAGE_HELLO: {
      return { ...state, message: MESSAGE_HELLO_MSG };
    }
    case MESSAGE_BYE: {
      return { ...state, message: MESSAGE_BYE_MSG };
    }
    default: {
      return state;
    }
  }
};

export default messageReducer;
