import { combineReducers } from 'redux';
import authentication from './authentication/slice';
import teams from './Teams/slice';
import users from './users/slice';
import rites from './rites/slice';

export default combineReducers({
  authentication: authentication.reducer,
  users: users.reducer,
  teams: teams.reducer,
  rites: rites.reducer,
});
