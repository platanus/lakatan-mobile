import { call, put, takeLatest } from 'redux-saga/effects';
import { actions as usersActions } from './slice';
import { actions as authActions } from '../authentication/slice';
import { actions as teamActions } from '../Teams/slice';

import { USERS_REQUEST } from '../types';
import api from '../../api/users';

function *getUsersRequest({ payload }) {
  yield put(usersActions.start());
  try {
    const {
      data,
    } = yield call(api.users, payload);
    yield put(usersActions.get({
      data,
    }));
  } catch (error) {
    if (error.response.status.toString() === '401') {
      yield put(authActions.authError('¡Oops, hubo un error!'));
      yield put(usersActions.reset());
      yield put(teamActions.reset());
      yield put(authActions.reset());
    }
  }
  yield put(usersActions.finish());
}

export default function *usersSaga() {
  yield takeLatest(USERS_REQUEST, getUsersRequest);
}
