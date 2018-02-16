import { combineReducers } from 'redux';
import messageReducer from './Message';

export default combineReducers({
  message: messageReducer,
});
