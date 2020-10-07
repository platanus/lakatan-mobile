import { all } from 'redux-saga/effects';
import authenticactionSaga from './authentication/saga';
import teamsSaga from './Teams/saga';
import usersSaga from './users/saga';
import ritesSaga from './rites/saga';
import ritesApi from '../api/rites';

export default function* rootSagas() {
  yield all([
    authenticactionSaga(),
    teamsSaga(),
    usersSaga(),
    ritesSaga(),
  ]);
}
