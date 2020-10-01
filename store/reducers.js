import { combineReducers } from 'redux';
import authentication from './authentication/slice';

export default combineReducers({
  authentication: authentication.reducer,
});
