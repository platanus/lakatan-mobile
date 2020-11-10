import { all } from 'redux-saga/effects';
import authenticactionSaga from './authentication/saga';
import teamsSaga from './Teams/saga';
import usersSaga from './users/saga';
import ritesSaga from './rites/saga';
import rafflesSaga from './raffles/saga';
import syncSaga from './sync/saga';
import hooksSaga from './hooks/saga';

export default function *rootSagas() {
  yield all([
    authenticactionSaga(),
    teamsSaga(),
    usersSaga(),
    ritesSaga(),
    rafflesSaga(),
    syncSaga(),
    hooksSaga(),
  ]);
}
