import { combineReducers } from 'redux';

import messageReducer from './Message';
import counterReducer from './Counter';

export default combineReducers({
  message: messageReducer,
  counter: counterReducer,
});
