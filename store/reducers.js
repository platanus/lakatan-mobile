import { combineReducers } from 'redux';
import authentication from './authentication/slice';
import teams from './Teams/slice';

export default combineReducers({
  authentication: authentication.reducer,
  teams: teams.reducer,
});
