import { call, put, takeLatest } from 'redux-saga/effects';
import { actions as ritesActions } from './slice';
import { actions as teamsActions } from '../Teams/slice';
import { actions as authActions } from '../authentication/slice';
import { CREATE_RITE_REQUEST } from '../types';
import ritesApi from '../../api/rites';

function *createRiteRequest({ payload }) {
  yield put(ritesActions.start());
  try {
    yield call(ritesApi.createRite, payload);
  } catch (error) {
    if (error.response.status.toString() === '401') {
      yield put(authActions.authError('¡Oops, hubo un error!'));
      yield put(ritesActions.reset());
      yield put(teamsActions.reset());
      yield put(authActions.reset());
    } else console.log(error);
  }
  yield put(ritesActions.finish());
}

export default function *ritesSaga() {
  yield takeLatest(CREATE_RITE_REQUEST, createRiteRequest);
}
