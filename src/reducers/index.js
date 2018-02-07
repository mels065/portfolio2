import { combineReducers } from 'redux';
import defaultReducer from './Default';

export default combineReducers({
  default: defaultReducer,
});
