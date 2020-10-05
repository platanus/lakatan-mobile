import { all } from 'redux-saga/effects';
import authenticactionSaga from './authentication/saga';
import usersSaga from './users/saga';

export default function* rootSagas() {
  yield all([
    authenticactionSaga(),
    usersSaga(),
  ]);
}
