import { combineReducers } from 'redux';
import authentication from './authentication/slice';
import teams from './Teams/slice';
import organizations from './organizations/slice';
import users from './users/slice';
import rites from './rites/slice';
import raffles from './raffles/slice';
import sync from './sync/slice';
import hooks from './hooks/slice';
import labels from './labels/slice';

export default combineReducers({
  authentication: authentication.reducer,
  users: users.reducer,
  teams: teams.reducer,
  organizations: organizations.reducer,
  rites: rites.reducer,
  raffles: raffles.reducer,
  sync: sync.reducer,
  hooks: hooks.reducer,
  labels: labels.reducer,
});
